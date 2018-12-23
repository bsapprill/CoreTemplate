import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: "CoreOne", loadChildren: "./core-one/core-one.module#CoreOneModule"
  },
  {
    path: "CoreTwo", loadChildren: "./core-two/core-two.module#CoreTwoModule"
  },
  {
    path: "CoreThree", loadChildren: "./core-three/core-three.module#CoreThreeModule"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
