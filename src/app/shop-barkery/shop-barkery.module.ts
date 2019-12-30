import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopBarkeryPageRoutingModule } from './shop-barkery-routing.module';

import { ShopBarkeryPage } from './shop-barkery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopBarkeryPageRoutingModule
  ],
  declarations: [ShopBarkeryPage]
})
export class ShopBarkeryPageModule {}
