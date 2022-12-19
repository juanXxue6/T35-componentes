import { Component } from '@angular/core';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  nombre = "";
  cif = 0;
  direccion = "";
  grupo = 0;


  datos = [{nombre:"juan",cif:31,direccion:"calle sol",grupo:1}];


  cargarData(){
    this.datos.push({nombre:this.nombre,cif:this.cif,direccion:this.direccion,grupo:this.grupo.valueOf()});
  }







}
