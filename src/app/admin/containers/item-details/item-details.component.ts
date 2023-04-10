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
    this.itemService.readOne('1').subscribe(item => this.item = item);
  }

  onCreate(item: Item) {
    this.itemService.create(item).subscribe((item) => {
      console.log(`Created successful!`)
    });
  }
  onUpdate(item: Item) {
    this.itemService.update(item).subscribe((item) => {
      console.log(`Updated successful!`)
    });
  }
  onDelete(playload: Item) {
    this.itemService.delete(playload).subscribe(() => {
      console.log('Deleted successful');
    });
  }
}
