import { Routes } from '@angular/router';
import { Home } from './sections/home/home';
import { Privacidad } from './sections/privacidad/privacidad';

export const routes: Routes = [
  {path: '', component: Home},
  {path: 'privacidad', component: Privacidad},
  {path: '**', redirectTo: ''}
];
