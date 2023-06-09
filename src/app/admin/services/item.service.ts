import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, delay, map, of, retryWhen, take, tap, throwError } from 'rxjs';

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
    return this.httpClient.get<Item[]>('api/items').pipe(tap(items => this.items = items),
      retryWhen((errors) => errors.pipe(tap(console.log), delay(2000), take(2))), catchError(this.handleError));
  }

  readOne(id: string | null) {
    return this.read().pipe(map(items => {
      const item = items.find(i => i.id === id);
      if (item) {
        return item;
      }
      return { name: '', icon: '', description: '', price: 0, };
    }));
  }
  getItem(id: string | null) {
    return this.httpClient.get<Item>(`/api/items/${id}`).pipe(catchError(this.handleError));
  }
  create(playload: Item) {
    return this.httpClient.post<Item>(`/api/items`, playload).pipe(tap((item: Item) => {
      this.items = [...this.items, item];
    }), catchError(this.handleError));
  }

  update(playload: Item) {
    return this.httpClient.put<Item>(`/api/items/${playload.id}`, playload).pipe(
      map((item: Item) => {
        this.items = this.items.map(i => {
          if (i.id === playload.id) {
            return playload;
          }
          return i;
        });
      }), catchError(this.handleError));
  }
  delete(playload: Item) {
    return this.httpClient.delete(`/api/items/${playload.id}`).pipe(tap(() => {
      this.items = this.items.filter(i => i.id !== playload.id);
    }), catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    if (err.error instanceof ErrorEvent) {
      // client side
      console.error(err.error.message);
    } else {
      // server side
      console.error('Server', err.status);
    }
    return throwError(() => new Error(err.message));
  }
}
