import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherDetailRoutingModule } from './weather-detail-routing.module';
import { WeatherDetailComponent } from './weather-detail.component';


@NgModule({
  declarations: [
    WeatherDetailComponent
  ],
  imports: [
    CommonModule,
    WeatherDetailRoutingModule
  ]
})
export class WeatherDetailModule { }
