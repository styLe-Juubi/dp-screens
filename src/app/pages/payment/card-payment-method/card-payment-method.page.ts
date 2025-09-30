import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  standalone: false,
  selector: 'app-card-payment-method',
  templateUrl: './card-payment-method.page.html',
  styleUrls: ['./card-payment-method.page.scss'],
})
export class CardPaymentMethodPage {

  constructor(
    private readonly router: NavController
  ) {}

  goTo( url: string ) {
    this.router.navigateForward( url );
  }

  goBack() {
    this.router.navigateBack('/mi-dpcard'); 
  }

}
