import { Component, OnInit } from '@angular/core';
import {Employee} from "../employee";
import {ActivatedRoute} from "@angular/router";
import {EmployeeService} from "../employee.service";

@Component({
  selector: 'app-veiw-employee',
  templateUrl: './veiw-employee.component.html',
  styleUrls: ['./veiw-employee.component.css']
})
export class VeiwEmployeeComponent implements OnInit {
  id!: number
  employee!: Employee
  constructor( private route:ActivatedRoute,private employeeService:EmployeeService) { }

  ngOnInit(): void {
   this.id =this.route.snapshot.params['id'];
   this.employee=new Employee();
   this.employeeService.getEmployeeByID(this.id).subscribe( data=>{
     this.employee=data;
   })
  }

}
