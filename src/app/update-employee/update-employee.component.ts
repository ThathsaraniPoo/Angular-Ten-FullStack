import { Component, OnInit } from '@angular/core';
import {Employee} from "../employee";
import {EmployeeService} from "../employee.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  updateTypesForm!:FormGroup;
  id: any | undefined;

  constructor(private employeeService:EmployeeService,
              private route:ActivatedRoute,
              private router:Router,
              private fbd:FormBuilder) { }

  ngOnInit(): void {
   this.id=this.route.snapshot.params['id']

    this.employeeService.getEmployeeByID(this.id).subscribe(data =>{
      this.updateTypesForm.controls.firstName.setValue(data.firstName);
      this.updateTypesForm.controls.lastName.setValue(data.lastName);
      this.updateTypesForm.controls.emailId.setValue(data.emailId);
      },
      error => console.log(error));

    this.updateTypesForm = this.fbd.group({
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

  onSubmit(){
    const empo: Employee ={
      emailId: this.updateTypesForm.value.emailId, firstName: this.updateTypesForm.value.firstName,
      lastName: this.updateTypesForm.value.lastName
    }

    this.employeeService.updateEmployee(this.id,empo).subscribe(data =>{
      this.gotoEmployeeList()
    },error => console.log(error));
  }
  gotoEmployeeList(){
    this.router.navigate([`/employees`])
  }

}
