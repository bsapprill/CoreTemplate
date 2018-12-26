
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

  constructor(
    
    private state: NgRedux<IAppState>,
  ) { }

  ngOnInit() {
    
    
  }

  IncrementState() {

    this.state.dispatch({type: "CHANGE_STATEONE", change: 1});
    this.state.dispatch({type: "CHANGE_TOTAL_STATE", change: 1});
  }

  DecrementState() {

    this.state.dispatch({type: "CHANGE_STATEONE", change: -1});
    this.state.dispatch({type: "CHANGE_TOTAL_STATE", change: -1});

  }

}
