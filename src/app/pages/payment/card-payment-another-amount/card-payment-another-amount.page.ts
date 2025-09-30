import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  standalone: false,
  selector: 'app-card-payment-another-amount',
  templateUrl: './card-payment-another-amount.page.html',
  styleUrls: ['./card-payment-another-amount.page.scss'],
})
export class CardPaymentAnotherAmountPage {
  @ViewChild('amtInput') amtInput!: ElementRef<HTMLInputElement>;

  // valores iniciales
  maxAmount = 2346.56;
  amount = 10; // $10.00 por defecto
  inputValue = this.toFixed2(this.amount);
  maxAmountText = this.formatMoney(this.maxAmount);

  constructor(
    private readonly router: NavController
  ) {}

  goTo( url: string ) {
    this.router.navigateForward( url );
  }

  goBack() {
    this.router.navigateBack('/card-payment-amount'); 
  }

  focusInput() {
    const el = this.amtInput?.nativeElement;
    if (!el) return;
    el.focus();
    const len = el.value.length;
    try { el.setSelectionRange(len, len); } catch {}
  }

  onInput(ev: Event) {
    let v = (ev.target as HTMLInputElement).value;

    // permitir solo números y un decimal (.,)
    v = v.replace(/,/g, '.');        // admitir coma como decimal
    v = v.replace(/[^0-9.]/g, '');   // quitar todo lo demás

    // dejar solo el primer punto decimal
    const dot = v.indexOf('.');
    if (dot !== -1) {
      const left = v.slice(0, dot);
      const right = v.slice(dot + 1).replace(/\./g, '');
      v = left + '.' + right;
    }

    // limitar a 2 decimales
    const parts = v.split('.');
    if (parts[1]) parts[1] = parts[1].slice(0, 2);
    v = parts[0] + (parts[1] !== undefined ? '.' + parts[1] : '');

    let num = parseFloat(v);
    if (isNaN(num)) num = 0;

    // clamp al máximo
    if (num > this.maxAmount) {
      num = this.maxAmount;
      v = this.toFixed2(num);
      this.inputValue = v;
      this.amount = num;
      // mantener el cursor al final al corregir
      requestAnimationFrame(() => this.focusInput());
      return;
    }

    this.inputValue = v;
    this.amount = num;
  }

  onBlur() {
    // normalizar formato al salir
    this.inputValue = this.toFixed2(this.amount);
  }

  continuar() {
    this.goTo('/card-payment-confirm');
  }

  private toFixed2(n: number) {
    return (Math.round((n + Number.EPSILON) * 100) / 100).toFixed(2);
  }

  private formatMoney(n: number) {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(n);
  }
}
