import { Injectable } from '@angular/core';
import { Dispositivo } from '../interfaces/dispositivos';

@Injectable({
  providedIn: 'root'
})
export class ListadoDispositivosService {

  listado: Dispositivo[] = [
    {
      id: 1,
      name: 'Sensor 1',
      location: 'Patio',
    },
    {
      id: 2,
      name: 'Sensor 2',
      location: 'Cocina',
    },
    {
      id: 1,
      name: 'Sensor 1',
      location: 'Patio',
    },
    {
      id: 2,
      name: 'Sensor 2',
      location: 'Cocina',
    },
    {
      id: 1,
      name: 'Sensor 1',
      location: 'Patio',
    },
    {
      id: 2,
      name: 'Sensor 2',
      location: 'Cocina',
    },
  ]

  getListadoDispositivos(): Dispositivo[] {
    return this.listado;
  }

  constructor() { }
}
