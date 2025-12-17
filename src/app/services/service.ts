import { Injectable } from '@angular/core';

export interface Servicio {
  id : number,
  titulo: string,
  descripcion : string,
  imgUrl : string
}

@Injectable({
  providedIn: 'root',
})

export class Service {
  
  servicios : Servicio[] = [
    {id: 1, titulo: 'Constitución de empresas', descripcion: 'Te acompañamos en la creación legal de tu empresa, desde la elección del tipo de sociedad hasta el registro ante notario público, asegurando cumplimiento total.', imgUrl: 'img/ConstitucionDeEmpresas.webp'},
    {id: 2, titulo: 'Alta en el SAT, firma electrónica, certificados de sellos y sello VUCEM', descripcion: 'Realizamos tu alta en el SAT, obtenemos tu firma electrónica (FIEL), certificados de sellos digitales y el sello VUCEM para comercio exterior, garantizando trámites ágiles y seguros.',imgUrl: 'img/AltaEnElSAT.webp'},
    {id: 3, titulo:'Registro patronal IMSS/Infonavit',descripcion:'Gestionamos tu registro patronal ante el IMSS e Infonavit, asegurando el cumplimiento legal y la protección de tus empleados desde el primer día.',imgUrl:'img/RegistroPatronal.webp'},
    {id: 4, titulo:'Diseño y registro de marca',descripcion:'Creamos una identidad corporativa única para tu negocio: nombre, logo y eslogan.',imgUrl:'img/registroDeMarca.webp'},
    {id:5, titulo:'Creación de correos corporativos, redes sociales, y página corporativa',descripcion:'Diseñamos tu presencia digital con correos corporativos profesionales, perfiles en redes sociales optimizados, como lo es Linkedin y una página web moderna que refuerce tu imagen de marca.',imgUrl:'img/CreacionCorreosCorporativosRedesSociales.webp'},
    {id:6, titulo:'Trámite REPSE', descripcion:'Realizamos el trámite ante la STPS para obtener el REPSE, asegurando el cumplimiento de normativas laborales y la seguridad de tus trabajadores.', imgUrl: 'img/TramiteREPSEimg.webp'},
    {id: 7, titulo:'Certificaciones ISO, Manuales de funcionamiento, manuales de puestos de trabajo, CV empresarial', descripcion: 'Implementamos certificaciones ISO, elaboramos manuales de operación y descripciones de puestos, además de desarrollar un currículum empresarial profesional para tu organización.',imgUrl:'img/CertificacionesISOimg.webp'},
    {id: 8,titulo:'Permisos de funcionamiento, reglamento interno STPS', descripcion: 'Obtenemos los permisos necesarios para tu operación y creamos un reglamento interno acorde a las normativas de la STPS, asegurando un entorno laboral seguro y legal.',imgUrl: 'img/PermisosDeFuncionamientoReglamentoInternoSTPSImg.webp'},
    {id: 9, titulo:'Diseño y Manuales de Procesos y Procedimientos', descripcion: 'Optimizamos tus operaciones internas mediante la creación de manuales de procesos y procedimientos claros, eficientes y alineados con tus objetivos empresariales.',imgUrl:'img/disenoManualProceso.webp'}
  ]

  constructor(){}

  obtenerServicios(){
    return this.servicios;
  }

}
