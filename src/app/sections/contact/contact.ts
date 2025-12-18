import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';

import {ChangeDetectionStrategy, signal} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormControl, FormsModule, ReactiveFormsModule, Validators, FormGroup} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {merge, takeUntil} from 'rxjs';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, MatIconModule, MatButtonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  readonly email = new FormControl('', [Validators.required,Validators.email])
  readonly telefono = new FormControl('', [Validators.required,Validators.pattern('^[0-9]{10}$'),Validators.maxLength(10)])
  readonly mensaje = new FormControl('', [Validators.required]);

  errorEmail = signal('');
  errorTelefono = signal('');
  errorMensaje = signal('');

  constructor(){
    merge(this.email.statusChanges, this.email.valueChanges)
    .pipe(takeUntilDestroyed())
    .subscribe(() => this.updateErrorEmail());
  
    merge(this.telefono.statusChanges, this.telefono.valueChanges)
    .pipe(takeUntilDestroyed())
    .subscribe(() => this.updateErrorTelefono());

    merge(this.mensaje.statusChanges, this.mensaje.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMensaje());
  }

  updateErrorMensaje(){
    if(this.mensaje.hasError('required')){
      this.errorMensaje.set('Es obligatorio rellenarlo');
    } else{
      this.errorMensaje.set('');
    }
  }
  
  updateErrorTelefono(){
    if(this.telefono.hasError('required')){
      this.errorTelefono.set('El teléfono es obligatorio');
    } else if(this.telefono.hasError('pattern')){
      this.errorTelefono.set('La numeración solo debe abarcar 10 digitos')
    } else{
      this.errorTelefono.set('');
    }
  }
  
  updateErrorEmail(){
    if(this.email.hasError('required')){
      this.errorEmail.set('El campo es obligatorio');
    } else if (this.email.hasError('email')){
      this.errorEmail.set('El email no es válido');
    } else{
      this.errorEmail.set('');
    }
  }

  enviarFormulario(e : Event) {
    
  if (this.email.valid && this.telefono.valid && this.mensaje.valid){
    
    emailjs
      .sendForm('default_service','template_mb5zhbd', e.target as HTMLFormElement, {
        publicKey: 'oFj8ULOnSb9OkGXKC'
      })
      .then(
        () => {
          console.log('Exito');
        },
        (error) => {
          console.log('Fallo...',(error as EmailJSResponseStatus).text);
        },
      );

      // Limpiado de Inputs del formulario
      this.email.reset();
      this.telefono.reset();
      this.mensaje.reset();

  } else{
    console.log('Tus inputs tienen que ser validos para ser enviados.');
    }
  }
}
