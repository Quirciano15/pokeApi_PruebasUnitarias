import { Injectable } from '@angular/core';

@Injectable()
export class ClasePokemonService {
  nombre: string;
  imagen: string;
  tipo: any[];
  peso: number;
  altura: number;
  stats: any[];
  posicion: string;

  constructor() {
    this.nombre = '';
    this.imagen = '';
    this.tipo = [];
    this.peso = 0;
    this.altura = 0;
    this.stats = [];
    this.posicion = '';
  }
}
