import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  standalone: false,
  selector: 'app-card-payment-confirm',
  templateUrl: './card-payment-confirm.page.html',
  styleUrls: ['./card-payment-confirm.page.scss'],
})
export class CardPaymentConfirmPage {
  // Demo data (ajústalo a tu store/servicio real)
  amount = 100.00;            // monto seleccionado
  cardBrand: 'mastercard' | 'visa' | 'amex' = 'mastercard';
  last4 = '0174';
  brandIcon = 'assets/dpcard-sin-ligar/mastercard.png';

  constructor(private readonly router: NavController) {}

  goBack() {
    this.router.navigateBack('/card-payment-amount'); // pantalla anterior
  }

  onChangeAmount() {
    this.router.navigateBack('/card-payment-amount');
  }

  onChangeCard() {
    this.router.navigateBack('/card-payment-method-info');
  }

  onPay() {
    // TODO: integra tu flujo de pago real
    // this.paymentService.pay({ amount: this.amount, brand: this.cardBrand, last4: this.last4 }).subscribe(...)
    this.router.navigateForward('/card-payment-success'); // o muestra modal de éxito
  }
}
