import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsCafePageRoutingModule } from './news-cafe-routing.module';

import { NewsCafePage } from './news-cafe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsCafePageRoutingModule
  ],
  declarations: [NewsCafePage]
})
export class NewsCafePageModule {}
