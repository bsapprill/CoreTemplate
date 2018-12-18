import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgReduxModule, NgRedux } from "@angular-redux/store";

import { CoreOneModule } from './core-one/core-one.module';
import { CoreTwoModule } from './core-two/core-two.module';
import { CoreThreeModule } from './core-three/core-three.module';

import { rootReducer, IAppState, INITIAL_STATE } from './app.store';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    NgReduxModule,

    CoreOneModule,
    CoreTwoModule,
    CoreThreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(
    private appState: NgRedux<IAppState>
  ) {
    this.appState.configureStore(rootReducer, INITIAL_STATE);
  }
}
