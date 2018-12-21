import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CoreFormsService {

  constructor(
    private fb: FormBuilder
  ) { }

  get newCoreForm() {
    return this.fb.group({
      formName: [''],
      formNumber: [''],
      formData: this.fb.group({
        noteOne: [''],
        noteTwo: [''],      
      })
    })
  }
}
