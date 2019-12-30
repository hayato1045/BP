import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsTextPage } from './news-text.page';

const routes: Routes = [
  {
    path: '',
    component: NewsTextPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsTextPageRoutingModule {}
