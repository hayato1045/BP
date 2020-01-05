import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsTextSweetsPage } from './news-text-sweets.page';

const routes: Routes = [
  {
    path: '',
    component: NewsTextSweetsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsTextSweetsPageRoutingModule {}
