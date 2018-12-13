import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreOneModule } from './core-one/core-one.module';
import { CoreTwoModule } from './core-two/core-two.module';
import { CoreThreeModule } from './core-three/core-three.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    CoreOneModule,
    CoreTwoModule,
    CoreThreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
