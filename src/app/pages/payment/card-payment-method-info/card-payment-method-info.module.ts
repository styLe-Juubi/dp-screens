import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { CardPaymentMethodInfoPage } from './card-payment-method-info.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{
      path: '', component: CardPaymentMethodInfoPage
    }])
  ],
  declarations: [CardPaymentMethodInfoPage]
})
export class CardPaymentMethodInfoPageModule {}
