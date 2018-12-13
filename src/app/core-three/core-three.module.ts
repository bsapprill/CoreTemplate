import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreThreeRoutingModule } from './core-three-routing.module';
import { CoreThreeComponent } from './core-three.component';

@NgModule({
  imports: [
    CommonModule,
    CoreThreeRoutingModule
  ],
  declarations: [CoreThreeComponent]
})
export class CoreThreeModule { }
