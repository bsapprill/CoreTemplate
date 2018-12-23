import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { NgReduxModule, NgRedux } from "@angular-redux/store";
import { ReactiveFormsModule } from "@angular/forms";


import { rootReducer, IAppState, INITIAL_STATE } from './app.store';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    
    ReactiveFormsModule,
    
    AppRoutingModule,
    
    NgReduxModule,

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
