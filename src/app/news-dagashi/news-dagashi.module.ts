import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsDagashiPageRoutingModule } from './news-dagashi-routing.module';

import { NewsDagashiPage } from './news-dagashi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsDagashiPageRoutingModule
  ],
  declarations: [NewsDagashiPage]
})
export class NewsDagashiPageModule {}
