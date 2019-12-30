import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsBakeryPage } from './news-bakery.page';

const routes: Routes = [
  {
    path: '',
    component: NewsBakeryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsBakeryPageRoutingModule {}
