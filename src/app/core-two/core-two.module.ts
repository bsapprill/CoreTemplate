import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CoreTwoRoutingModule } from './core-two-routing.module';
import { CoreTwoComponent } from './core-two.component';


@NgModule({
  imports: [
    CommonModule,
    CoreTwoRoutingModule
  ],
  declarations: [CoreTwoComponent]
})
export class CoreTwoModule { }
