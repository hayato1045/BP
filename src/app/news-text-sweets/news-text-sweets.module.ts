import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsTextSweetsPageRoutingModule } from './news-text-sweets-routing.module';

import { NewsTextSweetsPage } from './news-text-sweets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsTextSweetsPageRoutingModule
  ],
  declarations: [NewsTextSweetsPage]
})
export class NewsTextSweetsPageModule {}
