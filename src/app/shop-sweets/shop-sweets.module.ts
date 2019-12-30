import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopSweetsPageRoutingModule } from './shop-sweets-routing.module';

import { ShopSweetsPage } from './shop-sweets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopSweetsPageRoutingModule
  ],
  declarations: [ShopSweetsPage]
})
export class ShopSweetsPageModule {}
