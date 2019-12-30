import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopBakeryPageRoutingModule } from './shop-bakery-routing.module';

import { ShopBakeryPage } from './shop-bakery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopBakeryPageRoutingModule
  ],
  declarations: [ShopBakeryPage]
})
export class ShopBakeryPageModule {}
