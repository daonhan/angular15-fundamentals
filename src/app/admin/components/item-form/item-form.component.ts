import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Item } from '../../models/item.model';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent {

  @Output() create = new EventEmitter<Item>()

  icons = [
    'caramel-swirl',
    'glazed-fudge',
    'just-chocolate',
    'sour-supreme',
    'strawberry-glaze',
    'vanilla-sundae',
    'zesty-lemon',
  ];

  handleSubmit(form: NgForm) {
    if (form.valid) {
      this.create.emit(form.form.value);
    } else {
      form.form.markAllAsTouched();
    }
  }
}
