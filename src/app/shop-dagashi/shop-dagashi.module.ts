import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopDagashiPageRoutingModule } from './shop-dagashi-routing.module';

import { ShopDagashiPage } from './shop-dagashi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopDagashiPageRoutingModule
  ],
  declarations: [ShopDagashiPage]
})
export class ShopDagashiPageModule {}
