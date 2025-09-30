import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  standalone: false,
  selector: 'app-balance-detail',
  templateUrl: './balance-detail.page.html',
  styleUrls: ['./balance-detail.page.scss'],
})
export class BalanceDetailPage {

  constructor(
    private readonly router: NavController
  ) {}

  goBack() {
    this.router.navigateBack('/mi-dpcard'); 
  }
}
