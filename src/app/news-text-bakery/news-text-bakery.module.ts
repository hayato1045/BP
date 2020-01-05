import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsTextBakeryPageRoutingModule } from './news-text-bakery-routing.module';

import { NewsTextBakeryPage } from './news-text-bakery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsTextBakeryPageRoutingModule
  ],
  declarations: [NewsTextBakeryPage]
})
export class NewsTextBakeryPageModule {}
