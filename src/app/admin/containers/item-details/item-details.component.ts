import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item.model';
import { ItemService } from '../../services/item.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {
  item!: Item;
  isEdit!: boolean;
  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService) { }
  ngOnInit(): void {
    this.isEdit = this.route.snapshot.data['isEdit'];
    const id = this.route.snapshot.paramMap.get('id');
    this.itemService.readOne(id).subscribe(item => this.item = item);
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
