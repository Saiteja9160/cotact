import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private _myFb: FormBuilder) { }
  registrationForm = this._myFb.group({
    userName: [''],
    password: [''],
    confirmPassword: [''],
    address : this._myFb.group({
      dob: [''],
      city: [''],

      state: ['']

    }),
  });

  ngOnInit(): void {
  }
  displayValues(){
    this.registrationForm.patchValue(
      {
        userName: 'testUser',
        password: 'testPassword',
        confirmPassword: 'testConfirmPassword ',
        address: {
          dob: 'test',
          city: 'guntur',
          state: 'ap'
        }
      })
    }


}
