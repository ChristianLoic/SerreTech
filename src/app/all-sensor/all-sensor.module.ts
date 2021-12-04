import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllSensorPageRoutingModule } from './all-sensor-routing.module';

import { AllSensorPage } from './all-sensor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllSensorPageRoutingModule
  ],
  declarations: [AllSensorPage]
})
export class AllSensorPageModule {}
