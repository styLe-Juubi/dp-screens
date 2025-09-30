import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  standalone: false,
  selector: 'app-card-payment-amount',
  templateUrl: './card-payment-amount.page.html',
  styleUrls: ['./card-payment-amount.page.scss'],
})
export class CardPaymentAmountPage {

  constructor(
    private readonly router: NavController
  ) {}

  goTo( url: string ) {
    this.router.navigateForward( url );
  }

  goBack() {
    this.router.navigateBack('/card-payment-method-info'); 
  }

}
