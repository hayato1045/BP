import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopFloristPageRoutingModule } from './shop-florist-routing.module';

import { ShopFloristPage } from './shop-florist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopFloristPageRoutingModule
  ],
  declarations: [ShopFloristPage]
})
export class ShopFloristPageModule {}
