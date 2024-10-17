import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginatedFootballCompetitionsRoutingModule } from './paginated-football-competitions-routing.module';
import { PaginatedFootballCompetitionsComponent } from './paginated-football-competitions.component';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';


@NgModule({
  declarations: [
    PaginatedFootballCompetitionsComponent
  ],
  imports: [
    CommonModule,
    PaginatedFootballCompetitionsRoutingModule,
    HttpClientModule
  ],
  providers: [HttpClientModule, HttpClient]
})
export class PaginatedFootballCompetitionsModule { }
``