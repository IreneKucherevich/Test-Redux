import {Injectable} from "@angular/core";
import {Actions, createEffect, Effect, ofType} from '@ngrx/effects';
import {EmployeeService} from "../../employee.service";
import * as EmployListActions from "./employee-list.actions";
import {exhaustMap, map, mergeMap, switchMap, tap} from 'rxjs/operators';
import {Employee} from "../employee-list.component";
import {DeleteById} from "./employee-list.actions";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {AddEditEmployeeDialogComponent} from "../../shared/add-edit-employee-dialog/add-edit-employee-dialog.component";

@Injectable()
export class EmployeeListEffects {

  constructor(private action$: Actions,
              private employeeService: EmployeeService,
              private dialog: MatDialog) {
  }

  @Effect()
  loadEmployees$ = this.action$.pipe(
    ofType(EmployListActions.EmployeeActionTypes.loading),
    switchMap((action) => this.employeeService.getEmployee().pipe(
      map((employees: Employee[]) => (new EmployListActions.LoadSuccess(employees)))
    ))
  );

  @Effect()
  deleteEmployeeById$ = this.action$.pipe(
    ofType(EmployListActions.EmployeeActionTypes.deleteById),
    map((action: DeleteById) => action.id),
    mergeMap((id: number) => this.employeeService.deleteEmployeeById(id).pipe(
      map(() => (new EmployListActions.DeleteByIdSuccess()))
    ))
  );

  @Effect()
  loadEmployeeAfterDelete$ = this.action$.pipe(
    ofType(EmployListActions.EmployeeActionTypes.deleteByIdSuccess),
    map(() => (new EmployListActions.Loading()))
  );


  @Effect()
  openAddEmployeeDialog$ = this.action$.pipe(
    ofType(EmployListActions.EmployeeActionTypes.openAddEmployeeDialog),
    exhaustMap(() => {
      const dialogRef: MatDialogRef<AddEditEmployeeDialogComponent> = this.dialog.open(AddEditEmployeeDialogComponent,{
        width:'500px'
      });

      return dialogRef.afterClosed();
    }),
    map(() => (new EmployListActions.CloseDialog())
    )
  )

}
