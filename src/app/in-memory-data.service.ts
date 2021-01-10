import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Dr Nice  ', money: 55, items: [] },
      { id: 2, name: 'Narco    ', money: 60, items: [] },
      { id: 3, name: 'Bombasto ', money: 45, items: [] },
      { id: 4, name: 'Celeritas', money: 63, items: [] },
      { id: 5, name: 'Magneta  ', money: 30, items: [] },
      { id: 6, name: 'RubberMan', money: 22, items: [] },
      { id: 7, name: 'Dynama   ', money: 80, items: [] },
      { id: 8, name: 'Dr IQ    ', money: 76, items: [] },
      { id: 9, name: 'Magma    ', money: 19, items: [] },
      { id: 10, name: 'Tornado  ', money: 41, items: [] }
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;

  }
}