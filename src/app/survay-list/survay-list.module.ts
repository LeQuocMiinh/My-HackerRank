import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SurvayListRoutingModule } from './survay-list-routing.module';
import { SurvayListComponent } from './survay-list.component';
import { ListComponent } from './list/list.component';
import { FilterComponent } from './filter/filter.component';


@NgModule({
  declarations: [
    SurvayListComponent,
    ListComponent,
    FilterComponent
  ],
  imports: [
    CommonModule,
    SurvayListRoutingModule
  ]
})
export class SurvayListModule { }
