import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// containers
import { ItemListComponent } from './containers/item-list/item-list.component';
import { ItemCardComponent } from './components/item-card/item-card.component';

// components

@NgModule({
  declarations:
    [
      ItemListComponent,
      ItemCardComponent
    ],
  imports: [
    CommonModule
  ],
  exports: [ItemListComponent]
})
export class AdminModule { }
