import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  ngOnInit(): void {
  }

model:User = new User('','','','','',false);
initialLoad = true;
submitted = false;

onSubmit() { this.submitted = true; }
}
