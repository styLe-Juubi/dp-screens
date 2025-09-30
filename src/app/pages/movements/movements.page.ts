import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Movimiento } from '../mi-dpcard/mi-dpcard.page';

@Component({
  standalone: false,
  selector: 'app-movements',
  templateUrl: './movements.page.html',
  styleUrls: ['./movements.page.scss'],
})
export class MovementsPage {

  movimientos: Movimiento[] = [
      {
        descripcion: '275 GDL TDP Galerías',
        fecha: '10 de noviembre 2023',
        hora: '10:15',
        monto: '$50.00',
        tipo: 'compra',
      },
      {
        descripcion: '275 GDL TDP Galerías',
        fecha: '10 de noviembre 2023',
        hora: '10:15',
        monto: '$150.00',
        tipo: 'compra',
      },
      {
        descripcion: '275 GDL TDP Galerías',
        fecha: '10 de noviembre 2023',
        hora: '10:15',
        monto: '$250.00',
        tipo: 'compra',
      },
      {
        descripcion: 'Depósito',
        fecha: '10 de noviembre 2023',
        hora: '10:15',
        monto: '+$500.00',
        tipo: 'deposito',
      },
      {
        descripcion: '275 GDL TDP Galerías',
        fecha: '10 de noviembre 2023',
        hora: '10:15',
        monto: '$500.00',
        tipo: 'compra',
      },
      {
        descripcion: '275 GDL TDP Galerías',
        fecha: '10 de noviembre 2023',
        hora: '10:15',
        monto: '$50.00',
        tipo: 'compra',
      },
      {
        descripcion: '275 GDL TDP Galerías',
        fecha: '10 de noviembre 2023',
        hora: '10:15',
        monto: '$150.00',
        tipo: 'compra',
      },
      {
        descripcion: '275 GDL TDP Galerías',
        fecha: '10 de noviembre 2023',
        hora: '10:15',
        monto: '$250.00',
        tipo: 'compra',
      },
  ];
  constructor(
    private readonly router: NavController
  ) {}

  goBack() {
    this.router.navigateBack('/mi-dpcard'); 
  }

}
