import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  standalone: false,
  selector: 'app-card-payment-success',
  templateUrl: './card-payment-success.page.html',
  styleUrls: ['./card-payment-success.page.scss'],
})
export class CardPaymentSuccessPage {
  // Datos del pago (ajústalos a tu flujo real)
  amount = 1000;
  transactionId = '245678';
  paymentMethod = 'Tarjeta de crédito';
  paidAt = new Date(2025, 7, 11, 12, 40, 30); // 11 ago 2025 12:40:30

  paidAtText = new Intl.DateTimeFormat('es-MX', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  }).format(this.paidAt) + ' h';


  constructor(
    private readonly router: NavController
  ) {}

  goShop() {
    this.router.navigateRoot('/home');
  }
}
