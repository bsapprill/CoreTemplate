import { Component, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../app.store';

@Component({
  selector: 'app-core-two',
  templateUrl: './core-two.component.html',
  styleUrls: ['./core-two.component.scss']
})
export class CoreTwoComponent implements OnInit {

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
