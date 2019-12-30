import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopCafePageRoutingModule } from './shop-cafe-routing.module';

import { ShopCafePage } from './shop-cafe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopCafePageRoutingModule
  ],
  declarations: [ShopCafePage]
})
export class ShopCafePageModule {}
