import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsFloristPageRoutingModule } from './news-florist-routing.module';

import { NewsFloristPage } from './news-florist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsFloristPageRoutingModule
  ],
  declarations: [NewsFloristPage]
})
export class NewsFloristPageModule {}
