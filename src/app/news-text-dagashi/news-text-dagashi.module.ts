import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsTextDagashiPageRoutingModule } from './news-text-dagashi-routing.module';

import { NewsTextDagashiPage } from './news-text-dagashi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsTextDagashiPageRoutingModule
  ],
  declarations: [NewsTextDagashiPage]
})
export class NewsTextDagashiPageModule {}
