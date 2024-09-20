import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemperatureConvertedRoutingModule } from './temperature-converted-routing.module';
import { TemperatureConvertedComponent } from './temperature-converted.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TemperatureConvertedComponent
  ],
  imports: [
    CommonModule,
    TemperatureConvertedRoutingModule,
    FormsModule
  ]
})
export class TemperatureConvertedModule { }
