import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// containers
import { ItemListComponent } from './containers/item-list/item-list.component';

// components

@NgModule({
  declarations:
    [
      ItemListComponent
    ],
  imports: [
    CommonModule
  ],
  exports: [ItemListComponent]
})
export class AdminModule { }
