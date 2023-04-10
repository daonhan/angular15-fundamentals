import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// containers
import { ItemListComponent } from './containers/item-list/item-list.component';
import { ItemDetailsComponent } from './containers/item-details/item-details.component';

// components
import { ItemCardComponent } from './components/item-card/item-card.component';
import { ItemFormComponent } from './components/item-form/item-form.component';

@NgModule({
  declarations:
    [
      ItemListComponent,
      ItemCardComponent,
      ItemDetailsComponent,
      ItemFormComponent
    ],
  imports: [
    CommonModule
  ],
  exports: [ItemListComponent, ItemDetailsComponent]
})
export class AdminModule { }
