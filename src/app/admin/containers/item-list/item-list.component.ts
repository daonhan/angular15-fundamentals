import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item.model';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  items!: Item[];
  item!: Item;

  constructor(private itemService: ItemService) {

  }
  ngOnInit(): void {
    this.items = this.itemService.items;
    this.item = this.items[0];
  }
  trackById(index: number, item: Item) {
    return item.id;
  }
}
