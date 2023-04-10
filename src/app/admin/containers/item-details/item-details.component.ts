import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item.model';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {
  item!: Item;
  ngOnInit(): void {
    this.item = {
      id: '1',
      name: 'Just Chocolate',
      icon: 'just-chocolate',
      promo: 'new',
      price: 100,
      description: 'For the pure chocoholic'
    };
  }

  onCreate(item: Item) {
    console.log(item);
  }
}
