import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'length-converted',
    loadChildren: () => import('./length-converted/length-converted.module').then(m => m.LengthConvertedModule)
  },
  {
    path: '',
    loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  { path: 'weather-detail', loadChildren: () => import('./weather-detail/weather-detail.module').then(m => m.WeatherDetailModule) },
  { path: 'temperature-converted', loadChildren: () => import('./temperature-converted/temperature-converted.module').then(m => m.TemperatureConvertedModule) },
  { path: 'survay-list', loadChildren: () => import('./survay-list/survay-list.module').then(m => m.SurvayListModule) },
  { path: 'paginated-football-competitions', loadChildren: () => import('./paginated-football-competitions/paginated-football-competitions.module').then(m => m.PaginatedFootballCompetitionsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
