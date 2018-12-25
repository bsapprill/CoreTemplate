import { Component, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../app.store';

@Component({
  selector: 'app-core-three',
  templateUrl: './core-three.component.html',
  styleUrls: ['./core-three.component.scss']
})
export class CoreThreeComponent implements OnInit {

  constructor(
    private state: NgRedux<IAppState>
  ) { }

  ngOnInit() {
  }

  IncrementState() {

  }

  DecrementState() {
    
  }

}
