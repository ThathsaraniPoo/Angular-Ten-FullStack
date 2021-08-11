import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "./employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl = "http://localhost:8080/api";
  constructor(private httpClient:HttpClient) {}

  getEmployeeList():Observable<Employee[]>{
  return this.httpClient.get<Employee[]>(`${this.baseUrl}/v1/employees`)
  }

  createEmployee(employee:Employee):Observable<object>{
    return this.httpClient.post(`${this.baseUrl}/v1/employees`,employee)
  }

  getEmployeeByID(id: number | undefined):Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseUrl}/v1/employees/${id}`)
  }
  updateEmployee(id:number, employee:Employee):Observable<object>{
    return  this.httpClient.put(`${this.baseUrl}/v1/employees/${id}`,employee)
  }
  deleteEmployee(id:number):Observable<object>{
    return this.httpClient.delete(`${this.baseUrl}/v1/employees/${id}`)
  }
}
