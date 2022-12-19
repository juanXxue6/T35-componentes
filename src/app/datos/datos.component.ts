import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent {

  @Input() dataToShow = [{nombre:"juan",cif:31,direccion:"calle sol",grupo:1}];


}
