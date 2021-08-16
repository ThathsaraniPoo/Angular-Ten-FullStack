import { Component, OnInit } from '@angular/core';
import {Employee} from "../employee";
import {EmployeeService} from "../employee.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
employees: Employee[] | undefined;
  constructor(private employeeService: EmployeeService,
              private router:Router) { }

  ngOnInit(): void {
    this.getEmployees();
    $(function(){
  $('#example').DataTable();
});

  }
 private getEmployees(){
    this.employeeService.getEmployeeList().subscribe(emp => {
      this.employees = emp;
    }
    )
 }
 updateEmployee(id:any){
    this.router.navigate(['update-employee',id])
 }
 deleteEmployee(id:any){
    this.employeeService.deleteEmployee(id).subscribe(data =>{
      console.log(data)
      this.getEmployees()
    })
 }
 viewEmployee(id:any){
   this.router.navigate(['view-employee',id])
 }
}
