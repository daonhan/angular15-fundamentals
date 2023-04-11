import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// containers
import { ItemListComponent } from './containers/item-list/item-list.component';
import { ItemDetailsComponent } from './containers/item-details/item-details.component';

// components
import { ItemCardComponent } from './components/item-card/item-card.component';
import { ItemFormComponent } from './components/item-form/item-form.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ItemResolver } from './resovers/item.resolver';
import { Item } from './models/item.model';
export const EMPTY_ITEM: Item = { name: '', icon: '', description: '', price: 0, }
export const routes: Routes = [
  {
    path: 'items',
    component: ItemListComponent
  },
  {
    path: 'items/new',
    component: ItemDetailsComponent,
    data: { item: { ...EMPTY_ITEM } }
  },
  {
    path: 'items/:id',
    component: ItemDetailsComponent,
    data: { isEdit: true },
    resolve: { item: ItemResolver }
  },
  { path: '', redirectTo: 'items', pathMatch: 'full' }
];

@NgModule({
  declarations:
    [
      ItemListComponent,
      ItemCardComponent,
      ItemDetailsComponent,
      ItemFormComponent
    ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
