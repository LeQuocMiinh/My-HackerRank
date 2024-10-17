import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurvayListComponent } from './survay-list.component';

const routes: Routes = [{ path: '', component: SurvayListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SurvayListRoutingModule { }
