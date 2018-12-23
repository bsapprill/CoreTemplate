import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreThreeComponent } from './core-three.component';

const routes: Routes = [
  {
    path: "", component: CoreThreeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreThreeRoutingModule { }
