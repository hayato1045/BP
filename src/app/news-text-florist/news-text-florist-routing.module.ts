import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsTextFloristPage } from './news-text-florist.page';

const routes: Routes = [
  {
    path: '',
    component: NewsTextFloristPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsTextFloristPageRoutingModule {}
