import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {EmployeeService} from "../employee.service";
import {Store} from "@ngrx/store";
import * as EmployListActions from "./+state/employee-list.actions";
import {MatTableDataSource} from "@angular/material/table";
import {EmployeeListQuery} from "./+state/employee-list.selectors";
import * as fromEmployee from "./+state/employee-list.reducer"
import {Employee} from "../models/employee.model";
import {MatDialog} from "@angular/material/dialog";
import {DeleteConfirmDialogComponent} from "../shared/delete-confirm-dialog/delete-confirm-dialog.component";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  title = 'test-project';
  displayedColumns: string[] = ['id', 'fname', 'lname', 'salary', 'edit', 'delete'];
  searchName: string;
  searchLastName: string;
  minSalary: number;
  maxSalary: number;
  employees: Observable<Employee[]>;
  employees$: Observable<Employee[]>;
  dataSource = new MatTableDataSource<Employee[]>();

  constructor(private es: EmployeeService, private store: Store<fromEmployee.EmployeeListState>, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.store.dispatch(new EmployListActions.Loading());
    this.employees$ = this.store.select(EmployeeListQuery.loadEmployees);
  }

  edit(employee: Employee): void {
    this.store.dispatch(new EmployListActions.OpenEditEmployeeDialog(employee))
  }

  add(): void {
    this.store.dispatch(new EmployListActions.OpenAddEmployeeDialog());
  }

  delete(id: number): void {
    // this.store.dispatch(new EmployListActions.DeleteById(id));
    const dialogRef = this.dialog.open(DeleteConfirmDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.store.dispatch(new EmployListActions.DeleteById(id));
      }
    });
  }

  search(): void {
    this.employees = this.es.getEmployeeByName(this.searchName);
  }
}
