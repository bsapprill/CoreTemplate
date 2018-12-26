import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../app.store';

@Component({
  selector: 'app-core-two',
  templateUrl: './core-two.component.html',
  styleUrls: ['./core-two.component.scss']
})
export class CoreTwoComponent implements OnInit {

  @select() CoreTwo_State$;

  constructor(
    private state: NgRedux<IAppState>
  ) { }

  ngOnInit() {
  }

  IncrementState() {

    this.state.dispatch({type: "CHANGE_STATETWO", change: 1});
    this.state.dispatch({type: "CHANGE_TOTAL_STATE", change: 1});
  }

  DecrementState() {

    this.state.dispatch({type: "CHANGE_STATETWO", change: -1});
    this.state.dispatch({type: "CHANGE_TOTAL_STATE", change: -1});

  }

}
