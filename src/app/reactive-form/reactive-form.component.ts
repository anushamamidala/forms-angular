import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms'
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  registrationForm = this.fb.group({
    fullName: ['', Validators.required],
    email: ['',[Validators.required, Validators.email]],
    phoneNo: ['',[Validators.required, Validators.min(1000000000), Validators.max(999999999999)]],
    password:['',[Validators.required, Validators.minLength(6)]],
    confirmPassword:['',Validators.required, Validators.minLength(6)],
    address: ['', Validators.required],
    city: ['',Validators.required],
    terms: ['',Validators.required  ]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log('submitted')
  }

}
