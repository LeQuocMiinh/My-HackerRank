import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginatedFootballCompetitionsComponent } from './paginated-football-competitions.component';

const routes: Routes = [{ path: '', component: PaginatedFootballCompetitionsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginatedFootballCompetitionsRoutingModule { }
