import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-reactive-example',
  templateUrl: './reactive-example.component.html',
  styleUrls: ['./reactive-example.component.css']
})
export class ReactiveExampleComponent implements OnInit {
addLoanTypesForm!:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  this.addLoanTypesForm=  this.fb.group({
    'loanName': new FormControl('',Validators.compose([
      Validators.required,
      Validators.min(10),
      Validators.email
    ])),
    'loanType': new FormControl(),
    'loanDescription': new FormControl('',Validators.compose([
      Validators.required,
      Validators.max(20),
    ])),
  })
  }

  addLoanType(){
    console.log(this.addLoanTypesForm.invalid)
    console.log(this.addLoanTypesForm.valid)
    console.log(this.addLoanTypesForm.dirty)
    console.log(this.addLoanTypesForm.untouched)

  }
}
