import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { CardPaymentConfirmPage } from './card-payment-confirm.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{
      path: '', component: CardPaymentConfirmPage,
    }])
  ],
  declarations: [CardPaymentConfirmPage]
})
export class CardPaymentConfirmPageModule {}
