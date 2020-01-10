import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsTextDagashiPage } from './news-text-dagashi.page';

const routes: Routes = [
  {
    path: '',
    component: NewsTextDagashiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsTextDagashiPageRoutingModule {}
