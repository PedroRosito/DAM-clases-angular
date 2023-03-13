import { Component } from '@angular/core';
import { Dispositivo } from '../interfaces/dispositivos';
import { ListadoDispositivosService } from '../services/listado-dispositivos.service';
import { LoggerService } from '../services/logger.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  constructor(
    private listadoService: ListadoDispositivosService,
    private loggerService: LoggerService) {}

  variable: number = 2;

  listado: Dispositivo[] = this.listadoService.getListadoDispositivos();

  buttonState: boolean = false;
  texto: string = "mostrar texto al clickear";
  numeroTarjeta: string = "texto";

  toggleButton(texto: string) {
    this.buttonState = !this.buttonState;
    this.loggerService.logWarning(texto);
  }
}
