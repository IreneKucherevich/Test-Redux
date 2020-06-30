import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "./employee-list/employee-list.component";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  configUrl ='http://localhost:8080/employees';

  getEmployeeByName(searchTerm: string): Observable<Employee[]> {
    console.log('Service works!');
    return this.http.get<Employee[]>(`${this.configUrl}/?firstName=${searchTerm}`);
  }

  getEmployee(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.configUrl}`);
  }

  deleteEmployee( id: number): Observable<any>{
    console.log(`${this.configUrl}/remove/${id}`);
    const httpOptions = {
      headers: new HttpHeaders({})
    };
    return this.http.delete(`${this.configUrl}/remove/${id}`,  httpOptions)
  }
}
