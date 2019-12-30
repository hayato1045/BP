import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsBakeryPageRoutingModule } from './news-bakery-routing.module';

import { NewsBakeryPage } from './news-bakery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsBakeryPageRoutingModule
  ],
  declarations: [NewsBakeryPage]
})
export class NewsBakeryPageModule {}
