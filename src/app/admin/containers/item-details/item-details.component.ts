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
    this.itemService.readOne('12').subscribe(item => this.item = item);
  }

  onCreate(item: Item) {
    this.itemService.create(item).subscribe({
      next: (item) => {
        console.log(`Created successful!`)
      },
      error: (err) => console.error(err)
    });
  }
  onUpdate(item: Item) {
    this.itemService.update(item).subscribe({
      next: () => {
        console.log(`Updated successful!`)
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
  onDelete(playload: Item) {
    this.itemService.delete(playload).subscribe({
      next: () => {
        console.log('Deleted successful');
      },
      error: (err) => { console.error(err) }
    });
  }
}
