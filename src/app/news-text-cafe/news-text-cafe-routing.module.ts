import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsTextCafePage } from './news-text-cafe.page';

const routes: Routes = [
  {
    path: '',
    component: NewsTextCafePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsTextCafePageRoutingModule {}
