import { Component, OnInit } from '@angular/core';
import {Employee} from "../employee";
import {EmployeeService} from "../employee.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  updateTypesForm!:FormGroup;
  id: any | undefined;
  employee:Employee = new Employee();
  constructor(private employeeService:EmployeeService,
              private route:ActivatedRoute,
              private router:Router,
              private fbd:FormBuilder) { }

  ngOnInit(): void {
   this.id=this.route.snapshot.params['id']

    this.employeeService.getEmployeeByID(this.id).subscribe(data =>{
        this.employee=data;
        },
      error => console.log(error));
  }

  onSubmit(){
    this.employeeService.updateEmployee(this.id,this.employee).subscribe(data =>{
      this.gotoEmployeeList()
    },error => console.log(error));
  }
  gotoEmployeeList(){
    this.router.navigate([`/employees`])
  }

}
