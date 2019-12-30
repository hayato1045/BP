import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopBarkeryPage } from './shop-barkery.page';

const routes: Routes = [
  {
    path: '',
    component: ShopBarkeryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopBarkeryPageRoutingModule {}
