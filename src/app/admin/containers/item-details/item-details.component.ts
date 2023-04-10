import { Component } from '@angular/core';
import { Item } from '../../models/item.model';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent {

  onCreate(item: Item) {
    console.log(item);
  }
}
