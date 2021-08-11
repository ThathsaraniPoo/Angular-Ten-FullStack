import {Component, OnInit} from '@angular/core';
import {Employee} from "./employee";
import {EmployeeService} from "./employee.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular 10 Spring-Boot CRUD Full Stack App';
  impWorks: String | undefined;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {

  }

}
