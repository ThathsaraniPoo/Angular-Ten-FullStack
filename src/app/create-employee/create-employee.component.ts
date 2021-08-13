import { Component, OnInit } from '@angular/core';
import {Employee} from "../employee";
import {EmployeeService} from "../employee.service";
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  createTypesForm!:FormGroup;
employee:Employee = new Employee();
  constructor(private employeeService:EmployeeService,
              private router:Router,private fbc:FormBuilder) { }

  ngOnInit(): void {
    this.createTypesForm = this.fbc.group({
      'firstName': new FormControl('',Validators.compose([
        Validators.required,
        Validators.min(10),

      ])),
      'lastName': new FormControl('',Validators.compose([
        Validators.required,
        Validators.min(10),

      ])),
      'emailId': new FormControl('',Validators.compose([
        Validators.required,
        Validators.min(10),
        Validators.email
      ])),

    })
  }



  saveEmployee(){
    const emp: Employee ={
      emailId: this.createTypesForm.value.emailId, firstName: this.createTypesForm.value.firstName, lastName: this.createTypesForm.value.lastName

    }
    this.employeeService.createEmployee(emp).subscribe(data =>{
      console.log(data)
        this.gotoEmployeeList()
    },
      error => console.log(error));

  }

  gotoEmployeeList(){
    this.router.navigate([`/employees`])
  }

  onSubmit(){
  console.log(this.employee)
    this.saveEmployee()
  }
}
