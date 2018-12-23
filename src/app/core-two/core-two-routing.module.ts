import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreTwoComponent } from './core-two.component';

const routes: Routes = [
  {
    path: "", component: CoreTwoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreTwoRoutingModule { }
