import { Location } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavController } from '@ionic/angular';

interface SmsField {
  value: string;
  focused: boolean;
}

@Component({
  standalone: false,
  selector: 'app-liga-dpcard-sms',
  templateUrl: './liga-dpcard-sms.page.html',
  styleUrls: ['./liga-dpcard-sms.page.scss'],
})
export class LigaDpcardSmsPage implements OnInit, OnDestroy {
  smsFields: SmsField[] = [
    { value: '', focused: false },
    { value: '', focused: false },
    { value: '', focused: false },
    { value: '', focused: false },
    { value: '', focused: false },
    { value: '', focused: false }
  ];
  
  remainingTime: number = 60;
  private timerInterval: any;

  constructor(
    private readonly router: NavController
  ) {}

  goBack() {
    this.router.navigateBack('/liga-dpcard'); 
  }

  ngOnInit() {
    this.startTimer();
  }

  ngOnDestroy() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }

  startTimer() {
    this.timerInterval = setInterval(() => {
      if (this.remainingTime > 0) {
        this.remainingTime--;
      } else {
        clearInterval(this.timerInterval);
      }
    }, 1000);
  }

  onSmsInput(event: any, index: number) {
    const value = event.target.value.replace(/\D/g, '');
    
    if (value.length > 0) {
      this.smsFields[index].value = value;
      
      // Auto-focus next field if available
      if (index < this.smsFields.length - 1) {
        const nextField = document.querySelector(`.input-field:nth-child(${index + 2}) ion-input`) as HTMLIonInputElement;
        if (nextField) {
          nextField.setFocus();
        }
      }
    } else {
      this.smsFields[index].value = '';
    }
  }

  onFieldFocus(index: number) {
    // Clear focus from all fields
    this.smsFields.forEach(field => field.focused = false);
    // Set focus on current field
    this.smsFields[index].focused = true;
  }

  isCodeComplete(): boolean {
    return this.smsFields.every(field => field.value.length > 0);
  }

  getSmsCode(): string {
    return this.smsFields.map(field => field.value).join('');
  }

  continueVerification() {
    if (this.isCodeComplete()) {
      const code = this.getSmsCode();
      console.log('Código SMS ingresado:', code);
      
      // Aquí puedes implementar la lógica para verificar el código
      // Por ejemplo: llamada a API, navegación, etc.
      
      alert(`Código verificado: ${code}`);
    }
  }

  resendCode() {
    if (this.remainingTime === 0) {
      this.remainingTime = 60;
      this.startTimer();
      
      // Aquí puedes implementar la lógica para reenviar el código
      console.log('Reenviando código SMS...');
      
      alert('Código reenviado');
    }
  }
}
