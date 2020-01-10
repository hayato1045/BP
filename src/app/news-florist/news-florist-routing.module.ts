import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsFloristPage } from './news-florist.page';

const routes: Routes = [
  {
    path: '',
    component: NewsFloristPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsFloristPageRoutingModule {}
