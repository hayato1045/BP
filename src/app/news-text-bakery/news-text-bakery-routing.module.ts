import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsTextBakeryPage } from './news-text-bakery.page';

const routes: Routes = [
  {
    path: '',
    component: NewsTextBakeryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsTextBakeryPageRoutingModule {}
