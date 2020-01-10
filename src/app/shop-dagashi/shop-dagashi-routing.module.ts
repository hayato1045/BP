import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopDagashiPage } from './shop-dagashi.page';

const routes: Routes = [
  {
    path: '',
    component: ShopDagashiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopDagashiPageRoutingModule {}
