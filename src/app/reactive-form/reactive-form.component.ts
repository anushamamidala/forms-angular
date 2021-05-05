import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  userForm = this.fb.group({
    fullName: [''],
    email: [''],
    phoneNo: [''],
    password:[''],
    confirmPassword:[''],
    address: [''],
    city: [''],
    terms: ['']
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log('submitted')
  }

}
