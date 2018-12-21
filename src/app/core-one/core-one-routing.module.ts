import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreOneComponent } from './core-one.component';

const routes: Routes = [
  {
    path: "", component: CoreOneComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreOneRoutingModule { }
