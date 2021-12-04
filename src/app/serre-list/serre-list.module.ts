import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SerreListPageRoutingModule } from './serre-list-routing.module';

import { SerreListPage } from './serre-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SerreListPageRoutingModule
  ],
  declarations: [SerreListPage]
})
export class SerreListPageModule {}
