import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items: Item[] = [
    {
      id: '1',
      name: 'Just Chocolate',
      icon: 'just-chocolate',
      promo: 'new',
      price: 100,
      description: 'For the pure chocoholic'
    },
    {
      id: '2',
      name: 'Glazed Fudge',
      icon: 'glazed-fudge',
      promo: 'limited',
      price: 229,
      description: 'Sticky perfection.',
    },
    {
      id: '3',
      name: 'Caramel Swirl',
      icon: 'caramel-swirl',
      price: 129,
      description: 'Chocolate drizzled with caramel.',
    },
  ];
  constructor() { }
  read(): Item[] {
    return this.items;
  }
  readOne(id: string): Item {
    const item = this.read().find(i => i.id === id);
    if (item) {
      return item;
    }

    return { name: '', icon: '', description: '', price: 0, };
  }
  create(playload: Item) {
    this.items = [...this.items, playload];
    console.log(this.items);
  }

  update(playload: Item) {
    this.items = this.items.map(i => {
      if (i.id === playload.id) {
        return playload;
      }
      return i;
    });
    console.log(this.items);
  }
  delete(playload: Item) {
    this.items = this.items.filter(i => i.id !== playload.id);
    console.log(this.items);
  }
}
