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
        price: 100,
        description: 'For the pure chocoholic'
      },
      {
        id: '2',
        name: 'Glazed Fudge',
        icon: 'glazed-fudge',
        price: 129,
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

}
