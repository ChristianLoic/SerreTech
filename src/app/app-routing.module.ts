import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./map/map.module').then( m => m.MapPageModule)
  },
  {
    path: 'sensor-details',
    loadChildren: () => import('./sensor-details/sensor-details.module').then( m => m.SensorDetailsPageModule)
  },
  {
    path: 'sensor-list',
    loadChildren: () => import('./sensor-list/sensor-list.module').then( m => m.SensorListPageModule)
  },
  {
    path: 'serre-list',
    loadChildren: () => import('./serre-list/serre-list.module').then( m => m.SerreListPageModule)
  },
  {
    path: 'all-sensor',
    loadChildren: () => import('./all-sensor/all-sensor.module').then( m => m.AllSensorPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
