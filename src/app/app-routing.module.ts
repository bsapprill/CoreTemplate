import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreOneComponent } from './core-one/core-one.component';
import { CoreTwoComponent } from './core-two/core-two.component';
import { CoreThreeComponent } from './core-three/core-three.component';

const routes: Routes = [
  {path: 'CoreOne', component: CoreOneComponent },
  {path: 'CoreTwo', component: CoreTwoComponent},
  {path: 'CoreThree', component: CoreThreeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
