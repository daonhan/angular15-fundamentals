import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { RouterModule, Routes } from '@angular/router';
import { ItemListComponent } from './admin/containers/item-list/item-list.component';
import { ItemDetailsComponent } from './admin/containers/item-details/item-details.component';

const routes: Routes = [
  {
    path: 'admin',
    children: [
      {
        path: 'items',
        component: ItemListComponent
      },
      {
        path: 'item',
        component: ItemDetailsComponent
      },
      { path: '', redirectTo: 'items', pathMatch: 'full' }
    ],
  },
  {
    path: '',
    redirectTo: 'admin',
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
