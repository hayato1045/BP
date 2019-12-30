import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopCafePage } from './shop-cafe.page';

const routes: Routes = [
  {
    path: '',
    component: ShopCafePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopCafePageRoutingModule {}
