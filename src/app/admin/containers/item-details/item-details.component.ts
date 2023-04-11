import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item.model';
import { ItemService } from '../../services/item.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {
  isEdit!: boolean;
  item$ = this.route.data.pipe(map(({ item }) => item))
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private itemService: ItemService) { }

  ngOnInit(): void {
    this.isEdit = this.route.snapshot.data['isEdit'];
  }

  onCreate(item: Item) {
    this.itemService.create(item).subscribe({
      next: (item) => {
        this.router.navigate(['admin', 'items', item.id]);
      },
      error: (err) => console.error(err)
    });
  }
  onUpdate(item: Item) {
    this.itemService.update(item).subscribe({
      next: () => {
        this.router.navigate(['admin']);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
  onDelete(playload: Item) {
    this.itemService.delete(playload).subscribe({
      next: () => {
        this.router.navigate(['admin']);
      },
      error: (err) => { console.error(err) }
    });
  }
}
