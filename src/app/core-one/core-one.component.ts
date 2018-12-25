
import { Component, OnInit } from '@angular/core';
import { CoreFormsService } from '../core-forms.service';
import { Route, Router } from '@angular/router';
import { select, NgRedux } from '@angular-redux/store';
import { IAppState } from '../app.store';

@Component({
  selector: 'app-core-one',
  templateUrl: './core-one.component.html',
  styleUrls: ['./core-one.component.scss']
})
export class CoreOneComponent implements OnInit {

  @select() CoreOne_State$;

  CoreForm;

  constructor(
    private cfs: CoreFormsService,
    private state: NgRedux<IAppState>,
  ) { }

  ngOnInit() {
    this.CoreForm = this.cfs.newCoreForm;
    
  }

  IncrementState() {

    this.state.dispatch({type: "INCREMENT_STATEONE"});
  }

  DecrementState() {

    this.state.dispatch({type: "DECREMENT_STATEONE"});

  }

}
