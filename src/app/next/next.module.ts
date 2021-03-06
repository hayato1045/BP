import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NextPage } from './next.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NextPageModule,
      RouterModule.forChild([{ path: 'next', component: NextPage }])
  ],
  declarations: [NextPage]
})
export class NextPageModule {}
