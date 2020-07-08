import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "./employee-list/employee-list.component";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  configUrl ='http://localhost:8080/employees/';
  // http://localhost:8080/employees/?firstName=Dona&lastName=T&minSalary=1000000&maxSalary=3000000

  getEmployeeByName(searchTerm: string): Observable<Employee[]> {
    console.log('Service works!');
    return this.http.get<Employee[]>(`${this.configUrl}?firstName=${searchTerm}`);
  }

  getEmployee(): Observable<Employee[]> {
    console.log(this.configUrl)
    return this.http.get<Employee[]>(`${this.configUrl}`);
  }

  deleteEmployeeById(id: number): Observable<{}>{
    const httpOptions = {
      headers: new HttpHeaders({})
    };
    return this.http.delete(`${this.configUrl}remove/${id}`,  httpOptions)
  }
}
