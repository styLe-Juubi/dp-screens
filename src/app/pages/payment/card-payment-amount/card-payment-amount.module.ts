import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { CardPaymentAmountPage } from './card-payment-amount.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{
      path: '', component: CardPaymentAmountPage,
    }])
  ],
  declarations: [CardPaymentAmountPage]
})
export class CardPaymentAmountPageModule {}
