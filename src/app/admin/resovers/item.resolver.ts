import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { ItemService } from '../services/item.service';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemResolver implements Resolve<Item> {
  constructor(private itemService: ItemService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Item> {
    return this.itemService.readOne(route.paramMap.get('id'));
  }
}
