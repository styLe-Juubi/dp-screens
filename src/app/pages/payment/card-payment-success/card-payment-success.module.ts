import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { CardPaymentSuccessPage } from './card-payment-success.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{
      path: '', component: CardPaymentSuccessPage,
    }])
  ],
  declarations: [CardPaymentSuccessPage]
})
export class CardPaymentSuccessPageModule {}
