import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SerreListPage } from './serre-list.page';

const routes: Routes = [
  {
    path: '',
    component: SerreListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SerreListPageRoutingModule {}
