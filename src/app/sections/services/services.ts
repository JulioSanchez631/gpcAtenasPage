import { Component } from '@angular/core';
import { Service } from '../../services/service';
import { Servicio } from '../../services/service';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-services',
  imports: [MatCardModule,MatButtonModule],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {

  serviciosActuales : Servicio[] = [];

  constructor(private servicios : Service){
    this.serviciosActuales = this.servicios.obtenerServicios();
  }

}
