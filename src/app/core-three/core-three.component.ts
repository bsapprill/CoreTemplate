import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../app.store';

@Component({
  selector: 'app-core-three',
  templateUrl: './core-three.component.html',
  styleUrls: ['./core-three.component.scss']
})
export class CoreThreeComponent implements OnInit {

  @select() CoreThree_State$;

  constructor(
    private state: NgRedux<IAppState>
  ) { }

  ngOnInit() {
  }

  IncrementState() {

    this.state.dispatch({type: "CHANGE_STATETHREE", change: 1});
    this.state.dispatch({type: "CHANGE_TOTAL_STATE", change: 1});
  }

  DecrementState() {

    this.state.dispatch({type: "CHANGE_STATETHREE", change: -1});
    this.state.dispatch({type: "CHANGE_TOTAL_STATE", change: -1});

  }

}
