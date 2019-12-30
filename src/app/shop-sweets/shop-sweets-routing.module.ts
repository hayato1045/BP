import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopSweetsPage } from './shop-sweets.page';

const routes: Routes = [
  {
    path: '',
    component: ShopSweetsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopSweetsPageRoutingModule {}
