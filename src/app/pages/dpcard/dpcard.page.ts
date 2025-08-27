import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

interface FaqItem {
  question: string;
  answer: string;
  isOpen: boolean;
}

@Component({
  standalone: false,
  selector: 'app-dpcard',
  templateUrl: './dpcard.page.html',
  styleUrls: ['./dpcard.page.scss'],
})
export class DpcardPage implements OnInit {
  selectedTab: string = 'registro';
  faqItems: FaqItem[] = [
    {
      question: '¿Cuales son los requisitos?',
      answer: 'Los requisitos incluyen ser mayor de edad, tener ingresos comprobables y un historial crediticio favorable.',
      isOpen: false
    },
    {
      question: '¿La tarjeta tiene costo de anualidad o comisión por manejo?',
      answer: 'No, la Dpcard no tiene costo de anualidad ni comisión por manejo de cuenta.',
      isOpen: false
    },
    {
      question: '¿Dónde puedo realizar mis pagos?',
      answer: 'Puedes realizar tus pagos en cualquier sucursal bancaria, por transferencia electrónica o a través de la banca en línea.',
      isOpen: false
    },
    {
      question: '¿Cuál es mi pago mínimo mensual?',
      answer: 'El pago mínimo mensual es del 5% del saldo total de tu tarjeta.',
      isOpen: false
    },
    {
      question: '¿Dónde puedo solicitar toda la información de movimientos de mi crédito?',
      answer: 'Puedes consultar todos los movimientos de tu crédito a través de la banca en línea, en sucursales o llamando al servicio al cliente.',
      isOpen: false
    },
    {
      question: '¿Cuáles son los requisitos para tramitar la tarjeta dpcard?',
      answer: 'Necesitas ser mayor de edad, tener ingresos mínimos de $8,000 mensuales y un historial crediticio sin reportes negativos.',
      isOpen: false
    },
    {
      question: '¿Cuánto es el cargo por una reclamación improcedente?',
      answer: 'El cargo por reclamación improcedente es de $150 pesos.',
      isOpen: false
    },
    {
      question: '¿Existe una penalización por pago tardío?',
      answer: 'Sí, existe una penalización del 3% sobre el saldo pendiente por pagos tardíos.',
      isOpen: false
    }
  ];

  constructor(
    private readonly location: Location
  ) { }

  goBack() {
    this.location.back(); 
  }

  ngOnInit() {
  }

  selectTab(tab: string) {
    this.selectedTab = tab;
  }

  toggleFaq(index: number) {
    // Si la pregunta seleccionada ya está abierta, la cerramos
    if (this.faqItems[index].isOpen) {
      this.faqItems[index].isOpen = false;
    } else {
      // Cerramos todas las preguntas
      this.faqItems.forEach((item, i) => {
        item.isOpen = false;
      });
      // Abrimos solo la pregunta seleccionada
      this.faqItems[index].isOpen = true;
    }
  }
}
