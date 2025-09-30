import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'dpcard',
    loadChildren: () => import('./pages/dpcard/dpcard.module').then( m => m.DpcardPageModule)
  },
  {
    path: 'liga-dpcard',
    loadChildren: () => import('./pages/liga-dpcard/liga-dpcard.module').then( m => m.LigaDpcardPageModule)
  },
  {
    path: 'liga-dpcard-sms',
    loadChildren: () => import('./pages/liga-dpcard-sms/liga-dpcard-sms.module').then( m => m.LigaDpcardSmsPageModule)
  },
  {
    path: 'mi-dpcard',
    loadChildren: () => import('./pages/mi-dpcard/mi-dpcard.module').then( m => m.MiDpcardPageModule)
  },
  {
    path: 'movements',
    loadChildren: () => import('./pages/movements/movements.module').then( m => m.MovementsPageModule)
  },
  {
    path: 'balance-detail',
    loadChildren: () => import('./pages/balance-detail/balance-detail.module').then( m => m.BalanceDetailPageModule)
  },
  {
    path: 'card-payment-method',
    loadChildren: () => import('./pages/payment/card-payment-method/card-payment-method.module').then( m => m.CardPaymentMethodPageModule)
  },
  {
    path: 'card-payment-method-info',
    loadChildren: () => import('./pages/payment/card-payment-method-info/card-payment-method-info.module').then( m => m.CardPaymentMethodInfoPageModule)
  },
  {
    path: 'card-payment-amount',
    loadChildren: () => import('./pages/payment/card-payment-amount/card-payment-amount.module').then( m => m.CardPaymentAmountPageModule)
  },
  {
    path: 'card-payment-another-amount',
    loadChildren: () => import('./pages/payment/card-payment-another-amount/card-payment-another-amount.module').then( m => m.CardPaymentAnotherAmountPageModule)
  },
  {
    path: 'card-payment-confirm',
    loadChildren: () => import('./pages/payment/card-payment-confirm/card-payment-confirm.module').then( m => m.CardPaymentConfirmPageModule)
  },
  {
    path: 'card-payment-success',
    loadChildren: () => import('./pages/payment/card-payment-success/card-payment-success.module').then( m => m.CardPaymentSuccessPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
