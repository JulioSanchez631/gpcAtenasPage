import { Component } from '@angular/core';
import { Service } from '../../services/service';
import { Servicio } from '../../services/service';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {

  serviciosActuales : Servicio[] = [];

  constructor(private servicios : Service){
    this.serviciosActuales = this.servicios.obtenerServicios();
  }

}
