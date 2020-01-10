import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsTextFloristPageRoutingModule } from './news-text-florist-routing.module';

import { NewsTextFloristPage } from './news-text-florist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsTextFloristPageRoutingModule
  ],
  declarations: [NewsTextFloristPage]
})
export class NewsTextFloristPageModule {}
