import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { CardPaymentMethodPage } from './card-payment-method.page';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{
      path: '',
      component: CardPaymentMethodPage
    }])
  ],
  declarations: [CardPaymentMethodPage]
})
export class CardPaymentMethodPageModule {}
