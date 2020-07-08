import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "./models/employee.model";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  baseApiUrl ='http://localhost:8080/employees/';
  // http://localhost:8080/employees/?firstName=Dona&lastName=T&minSalary=1000000&maxSalary=3000000

  getEmployee(): Observable<Employee[]> {
    console.log(this.baseApiUrl)
    return this.http.get<Employee[]>(`${this.baseApiUrl}`);
  }

  getEmployeeByName(searchTerm: string): Observable<Employee[]> {
    console.log('Service works!');
    return this.http.get<Employee[]>(`${this.baseApiUrl}?firstName=${searchTerm}`);
  }

  addEmployee(employee: Employee): Observable<Employee>{
    console.log(employee)
    return this.http.post<Employee>(`${this.baseApiUrl}save`, employee);
  }

  deleteEmployeeById(id: number): Observable<{}>{
    const httpOptions = {
      headers: new HttpHeaders({})
    };
    return this.http.delete(`${this.baseApiUrl}remove/${id}`,  httpOptions)
  }
}
