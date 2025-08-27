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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
