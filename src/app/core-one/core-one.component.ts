
import { Component, OnInit } from '@angular/core';
import { CoreFormsService } from '../core-forms.service';

@Component({
  selector: 'app-core-one',
  templateUrl: './core-one.component.html',
  styleUrls: ['./core-one.component.scss']
})
export class CoreOneComponent implements OnInit {

  CoreForm;

  constructor(
    private cfs: CoreFormsService
  ) { }

  ngOnInit() {
    this.CoreForm = this.cfs.newCoreForm;
  }

}
