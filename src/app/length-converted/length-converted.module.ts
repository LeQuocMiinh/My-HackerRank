import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LengthConvertedRoutingModule } from './length-converted-routing.module';
import { LengthConvertedComponent } from './length-converted.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LengthConvertedComponent
  ],
  imports: [
    CommonModule,
    LengthConvertedRoutingModule,
    ReactiveFormsModule
  ]
})
export class LengthConvertedModule { }
