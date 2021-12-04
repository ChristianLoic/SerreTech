import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllSensorPage } from './all-sensor.page';

const routes: Routes = [
  {
    path: '',
    component: AllSensorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllSensorPageRoutingModule {}
