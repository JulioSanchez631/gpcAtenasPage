import { Component } from '@angular/core';
import { Services } from '../services/services';
import { Contact } from '../contact/contact';

@Component({
  selector: 'app-home',
  imports: [Services,Contact],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
