import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsTextPageRoutingModule } from './news-text-routing.module';

import { NewsTextPage } from './news-text.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsTextPageRoutingModule
  ],
  declarations: [NewsTextPage]
})
export class NewsTextPageModule {}
