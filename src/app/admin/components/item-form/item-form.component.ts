import { Component, Output, EventEmitter, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Item } from '../../models/item.model';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent {

  @Input() item!: Item;
  @Input() isEdit!: boolean;
  @Output() create = new EventEmitter<Item>();
  @Output() update = new EventEmitter<Item>();
  @Output() delete = new EventEmitter<Item>();

  icons = [
    'caramel-swirl',
    'glazed-fudge',
    'just-chocolate',
    'sour-supreme',
    'strawberry-glaze',
    'vanilla-sundae',
    'zesty-lemon',
  ];

  handleCreate(form: NgForm) {
    if (form.valid) {
      this.create.emit(form.form.value);
    } else {
      form.form.markAllAsTouched();
    }
  }
  handleUpdate(form: NgForm) {
    if (form.valid) {
      this.update.emit({ ...this.item, ...form.form.value });
    } else {
      form.form.markAllAsTouched();
    }
  }
  handleDelete() {
    if (confirm(`Do you want to delete '${this.item?.name}'?`)) {
      this.delete.emit(this.item);
    }
  }

}
