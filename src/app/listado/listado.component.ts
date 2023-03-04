import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  buttonState: boolean = false;
  texto: string = "mostrar texto al clickear";
  numeroTarjeta: string = "texto";

  toggleButton(texto: string) {
    this.buttonState = !this.buttonState;
    console.log(texto);
  }
}
