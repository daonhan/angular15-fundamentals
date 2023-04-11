import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item.model';
import { ItemService } from '../../services/item.service';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {
  item!: Item;
  isEdit!: boolean;
  item$ = this.route.paramMap.pipe(map((p) => p.get('id')), switchMap((id) => this.itemService.getItem(id)))
  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService) { }

  ngOnInit(): void {
    this.isEdit = this.route.snapshot.data['isEdit'];
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
