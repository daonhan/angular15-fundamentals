import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';
import { HttpClient } from '@angular/common/http';
import { map, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items: Item[] = [];
  constructor(private httpClient: HttpClient) { }
  read() {
    if (this.items.length) {
      return of(this.items);
    }
    return this.httpClient.get<Item[]>('api/items').pipe(tap(items => this.items = items));
  }

  readOne(id: string) {
    return this.read().pipe(map(items => {
      const item = items.find(i => i.id === id);
      if (item) {
        return item;
      }
      return { name: '', icon: '', description: '', price: 0, };
    }));

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
