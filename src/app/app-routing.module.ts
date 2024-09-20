import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'length-converted',
    loadChildren: () => import('./length-converted/length-converted.module').then(m => m.LengthConvertedModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule)
  },
  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full',
  },
  { path: 'weather-detail', loadChildren: () => import('./weather-detail/weather-detail.module').then(m => m.WeatherDetailModule) },
  { path: 'temperature-converted', loadChildren: () => import('./temperature-converted/temperature-converted.module').then(m => m.TemperatureConvertedModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
