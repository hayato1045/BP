import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsTextCafePageRoutingModule } from './news-text-cafe-routing.module';

import { NewsTextCafePage } from './news-text-cafe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsTextCafePageRoutingModule
  ],
  declarations: [NewsTextCafePage]
})
export class NewsTextCafePageModule {}
