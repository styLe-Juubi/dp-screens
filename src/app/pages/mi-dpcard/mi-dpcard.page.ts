import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

export interface Movimiento {
  descripcion: string;
  fecha: string;
  hora: string;
  monto: string;
  tipo: 'compra' | 'deposito';
}

@Component({
  standalone: false,
  selector: 'app-mi-dpcard',
  templateUrl: './mi-dpcard.page.html',
  styleUrls: ['./mi-dpcard.page.scss'],
})
export class MiDpcardPage implements OnInit {
  showDigitalCard = false;
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
  ];
  
  constructor(
    private readonly router: NavController
  ) {}

  ngOnInit() {
  }

  goTo( url: string ) {
    this.router.navigateForward( url );
  }

  goBack() {
    this.router.navigateBack('/liga-dpcard-sms'); 
  }

}
