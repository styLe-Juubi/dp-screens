import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  standalone: false,
  selector: 'app-liga-dpcard',
  templateUrl: './liga-dpcard.page.html',
  styleUrls: ['./liga-dpcard.page.scss'],
})
export class LigaDpcardPage implements OnInit {
  cardNumber: string = '';
  digitCount: number = 0;


  constructor(
    private readonly router: NavController
  ) {}

  goTo( url: string ) {
    this.router.navigateForward( url );
  }

  goBack() {
    this.router.navigateBack('/dpcard'); 
  }


  ngOnInit() {
  }

  onCardNumberChange(event: any) {
    // Obtener solo los números del input
    const value = event.target.value.replace(/\D/g, '');
    
    // Limitar a 16 dígitos
    if (value.length <= 16) {
      this.cardNumber = value;
      this.digitCount = value.length;
      console.log({ x: this.digitCount });
      
      // Formatear el input para mostrar espacios cada 4 dígitos
      const formatted = value.replace(/(\d{4})(?=\d)/g, '$1 ');
      event.target.value = formatted;
      
      // Si se completaron los 16 dígitos, enfocar el botón
      if (value.length === 16) {
        setTimeout(() => {
          const button = document.querySelector('.link-button') as HTMLElement;
          if (button) button.focus();
        }, 100);
      }
    }
  }

  // Método para limpiar el input
  clearInput() {
    this.cardNumber = '';
    this.digitCount = 0;
  }

  linkCard() {
    if (this.digitCount === 16) {
      console.log('Ligando tarjeta:', this.cardNumber);
      this.clearInput();
    }
  }

  getFormattedCardNumber(): string {
    if (!this.cardNumber) return '1234 **** **** ****';
    
    const digits = this.cardNumber.replace(/\s/g, '');
    const formatted = digits.replace(/(\d{4})(?=\d)/g, '$1 ');
    const remaining = 16 - digits.length;
    
    if (remaining > 0) {
      const masked = '*'.repeat(remaining);
      const maskedFormatted = masked.replace(/(.{4})(?=.)/g, '$1 ');
      return formatted + ' ' + maskedFormatted;
    }
    
    return formatted;
  }
}
