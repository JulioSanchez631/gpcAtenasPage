import { Component } from '@angular/core';
import { Services } from '../services/services';
import { Contact } from '../contact/contact';

import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-home',
  imports: [Services,Contact,MatButtonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  scrollSeccionContacto(){
    const seccionContacto = document.getElementById('contact');

    if(seccionContacto instanceof HTMLElement){
      seccionContacto.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

}
