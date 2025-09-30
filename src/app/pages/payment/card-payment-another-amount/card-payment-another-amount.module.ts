import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { CardPaymentAnotherAmountPage } from './card-payment-another-amount.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{
      path: '', component: CardPaymentAnotherAmountPage,
    }])
  ],
  declarations: [CardPaymentAnotherAmountPage]
})
export class CardPaymentAnotherAmountPageModule {}
