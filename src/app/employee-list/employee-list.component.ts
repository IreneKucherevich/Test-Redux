import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {EmployeeService} from "../employee.service";
import {Store} from "@ngrx/store";
import * as EmployListActions from "./+state/employee-list.actions";
import {MatTableDataSource} from "@angular/material/table";
import {EmployeeListQuery} from "./+state/employee-list.selectors";
import * as fromEmployee from "./+state/employee-list.reducer"

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
  dataSource = new MatTableDataSource<Employee[]>();

  constructor(private es: EmployeeService, private store: Store<fromEmployee.EmployeeListState>) {
  }

  ngOnInit(): void {
   // this.reloadData();
   //  this.store.dispatch(EmployListActions.LoadEmployee());
    this.store.dispatch(new EmployListActions.Loading() );
    this.store.select(EmployeeListQuery.loadEmployees).subscribe()//////////////////////////////////параметры в subscribe
  }

  reloadData(): void {
    this.employees = this.es.getEmployee();
  }

  edit(): void {
    console.log("Edit works!")
  }

  delete(id: number): void {
    this.es.deleteEmployee(id).subscribe();
  }

  search(): void {
    this.employees = this.es.getEmployeeByName(this.searchName);
  }
}
