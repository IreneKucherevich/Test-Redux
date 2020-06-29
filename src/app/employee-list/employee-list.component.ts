import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {EmployeeService} from "../employee.service";

export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  salary: number;
}

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  title = 'test-project';
  displayedColumns: string[] = ['id', 'fname', 'lname', 'salary', 'edit', 'delete'];
  searchName: string;
  employees: Observable<Employee[]>;

  constructor(private es: EmployeeService) {
  }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(): void {
    this.employees = this.es.getEmployee();
  }

  edit(): void {
    console.log("Edit works!")
  }

  delete(id: number): void {
    console.log("Delete works!");
    this.es.deleteEmployee(id).subscribe();
  }

  search(): void {
    console.log(this.searchName);
    this.employees = this.es.getEmployeeByName(this.searchName);
  }
}
