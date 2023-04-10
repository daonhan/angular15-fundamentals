import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item.model';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {
  item!: Item;
  constructor(private itemService: ItemService) { }
  ngOnInit(): void {
    // this.item = this.itemService.readOne('1');
  }

  onCreate(item: Item) {
    this.itemService.create(item);
  }
  onUpdate(item: Item) {
    this.itemService.update(item);
  }
  onDelete(playload: Item) {
    this.itemService.delete(playload);
  }
}
