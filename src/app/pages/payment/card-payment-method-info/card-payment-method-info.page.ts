import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  standalone: false,
  selector: 'app-card-payment-method-info',
  templateUrl: './card-payment-method-info.page.html',
  styleUrls: ['./card-payment-method-info.page.scss'],
})
export class CardPaymentMethodInfoPage {
  // checkbox
  useAccountName = false;
  accountName = ''; // si ya lo tienes en store, asígnalo en ngOnInit

  // modelo de tarjeta
  card = {
    name: '',
    number: '',
    expMonth: '',
    expYear: '',
    cvv: ''
  };

  months = ['01','02','03','04','05','06','07','08','09','10','11','12'];
  years  = Array.from({ length: 12 }, (_, i) =>
    String((new Date().getFullYear() % 100) + i).padStart(2, '0')
  );

  constructor(private readonly router: NavController) {}

  goTo(url: string) {
    this.router.navigateForward(url);
  }

  goBack() {
    this.router.navigateBack('/card-payment-method');
  }

  onUseAccountNameToggle() {
    if (this.useAccountName) {
      this.card.name = this.accountName || this.card.name;
    }
  }

  onCardNumberInput(ev: any) {
    const v = (ev?.target?.value as string ?? '').replace(/\D/g, '').slice(0, 19);
    // agrupa en bloques de 4
    this.card.number = v.replace(/(\d{4})(?=\d)/g, '$1 ').trim();
  }

  get canContinue(): boolean {
    const nameOk = (this.card.name || '').trim().length > 2;
    const digits = (this.card.number || '').replace(/\s/g, '');
    const numberOk = digits.length >= 13 && digits.length <= 19;
    const mmOk = this.months.includes(this.card.expMonth);
    const yyOk = !!this.card.expYear;
    const cvvOk = /^\d{3,4}$/.test(this.card.cvv || '');
    return nameOk && numberOk && mmOk && yyOk && cvvOk;
  }

  onCvvInput(ev: any) {
    const raw = (ev?.target?.value as string ?? '');
    this.card.cvv = raw.replace(/\D/g, '').slice(0, 4);
  }

  addCard() {
    // if (!this.canContinue) return;
    this.goTo('/card-payment-amount');
  }
}
