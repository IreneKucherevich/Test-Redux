import {Injectable} from "@angular/core";
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import {EmployeeService} from "../../employee.service";
import * as EmployListActions from "./employee-list.actions";
import {map, mergeMap, catchError, switchMap} from 'rxjs/operators';
import {Employee} from "../employee-list.component";
import {of} from "rxjs";

@Injectable()
export class EmployeeListEffects {

  constructor(private action$: Actions, private employeeService: EmployeeService) {
  }

  @Effect()
  loadEmployees$ = this.action$.pipe(
    ofType(EmployListActions.EmployeeActionTypes.loading),
    switchMap((action) => this.employeeService.getEmployee().pipe(
      map((employees) => (new EmployListActions.LoadSuccess(employees)))
    ))
  )
}
