import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  items!: Item[];
  item!: Item;

  ngOnInit(): void {
    this.items = [
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
    this.item = this.items[0];
  }
  trackById(index: number, item: Item) {
    return item.id;
  }
}
