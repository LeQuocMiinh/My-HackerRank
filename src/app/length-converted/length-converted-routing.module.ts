import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LengthConvertedComponent } from './length-converted.component';

const routes: Routes = [{ path: '', component: LengthConvertedComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LengthConvertedRoutingModule { }
