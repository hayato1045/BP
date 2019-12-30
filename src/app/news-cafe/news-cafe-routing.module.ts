import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsCafePage } from './news-cafe.page';

const routes: Routes = [
  {
    path: '',
    component: NewsCafePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsCafePageRoutingModule {}
