import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsDagashiPage } from './news-dagashi.page';

const routes: Routes = [
  {
    path: '',
    component: NewsDagashiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsDagashiPageRoutingModule {}
