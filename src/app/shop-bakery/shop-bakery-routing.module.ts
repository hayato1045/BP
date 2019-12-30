import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopBakeryPage } from './shop-bakery.page';

const routes: Routes = [
  {
    path: '',
    component: ShopBakeryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopBakeryPageRoutingModule {}
