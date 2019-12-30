import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsSweetsPageRoutingModule } from './news-sweets-routing.module';

import { NewsSweetsPage } from './news-sweets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsSweetsPageRoutingModule
  ],
  declarations: [NewsSweetsPage]
})
export class NewsSweetsPageModule {}
