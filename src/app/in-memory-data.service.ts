import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Item } from './item';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Dr Nice', money: 55, life: 89, strength: 74, items: [] },
      { id: 2, name: 'Narco', money: 60, life: 75, strength: 56, items: [] },
      { id: 3, name: 'Bombasto', money: 45, life: 100, strength: 60, items: [] },
      { id: 4, name: 'Celeritas', money: 63, life: 70, strength: 45, items: [] },
      { id: 5, name: 'Magneta', money: 30, life: 113, strength: 69, items: [] },
      { id: 6, name: 'RubberMan', money: 22, life: 120, strength: 85, items: [] },
      { id: 7, name: 'Dynama', money: 80, life: 53, strength: 58, items: [] },
      { id: 8, name: 'Dr IQ', money: 76, life: 60,  strength: 43,items: [] },
      { id: 9, name: 'Magma', money: 19, life: 125, strength: 91, items: [] },
      { id: 10, name: 'Tornado', money: 41, life: 105, strength: 70, items: [] }
    ];
    const items = [
      { id: 1, name: 'Sword', price: 35 },
      { id: 2, name: 'Spear', price: 45 },
      { id: 3, name: 'Katana', price: 50 },
      { id: 4, name: 'Nunchucks', price: 15 },
      { id: 5, name: 'Magic wand', price: 80 },
      { id: 6, name: 'Gun', price: 55 },
      { id: 7, name: 'Axe', price: 20 },
      { id: 8, name: 'Crossbow', price: 75 },
      { id: 9, name: 'Armor', price: 70 },
      { id: 10, name: 'Helmet', price: 30 },
    ];
    return {heroes,items};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 1;

  }
  genID(items: Item[]): number {
    return items.length > 0 ? Math.max(...items.map(item => item.id)) + 1 : 1;

  }
}