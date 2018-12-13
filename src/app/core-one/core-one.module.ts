import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreOneRoutingModule } from './core-one-routing.module';
import { CoreOneComponent } from './core-one.component';


@NgModule({
  imports: [
    CommonModule,
    CoreOneRoutingModule
  ],
  declarations: [CoreOneComponent]
})
export class CoreOneModule { }
