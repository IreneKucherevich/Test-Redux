// import {createAction, props} from '@ngrx/store';
// import {Employee} from "../employee-list.component";
//
// export const LoadEmployee = createAction(
//   '[Employee] Load'
// );
//
// export const loadSuccess = createAction(
//   '[Employee] Load Success',
//   props<{ employees: any }>()
// );
//
// export const loadFail = createAction(
//   '[Employee] Load Fail',
//   props<{ error: string }>()
// );

import {Action} from '@ngrx/store';
import {Employee} from "../../models/employee.model";

export enum EmployeeActionTypes {

  loading = '[Employee] Load',
  loadSuccess = '[Employee] Load Success',
  loadFail = '[Employee] Load Fail',
  deleteById = '[Employee] Delete by Id',
  deleteByIdSuccess = '[Employee] Delete by Id Success',
  openAddEmployeeDialog = '[Employee] Open Add Employee Dialog',
  openEditEmployeeDialog = '[Employee] Open Edit Employee Dialog',
  closeDialog = '[Employee] Close Dialog'
}

export class Loading implements Action {
  readonly type = EmployeeActionTypes.loading;
}

export class LoadSuccess implements Action {
  readonly type = EmployeeActionTypes.loadSuccess;

  constructor(public  employees: Employee[]) {
  }
}

export class LoadFail implements Action {
  readonly type = EmployeeActionTypes.loadFail;

  constructor(public error: string) {
  }
}

export class DeleteById implements Action {
  readonly type = EmployeeActionTypes.deleteById;

  constructor(public id: number) {
  }
}

export class DeleteByIdSuccess implements Action {
  readonly type = EmployeeActionTypes.deleteByIdSuccess;
}

export class OpenAddEmployeeDialog implements Action {
  readonly type = EmployeeActionTypes.openAddEmployeeDialog;
}

export class OpenEditEmployeeDialog implements Action {
  readonly type = EmployeeActionTypes.openEditEmployeeDialog;

  constructor(public employee: Employee) {
  }
}

export class CloseDialog implements Action {
  readonly type = EmployeeActionTypes.closeDialog;
}

export type fromEmployeeActions =
  Loading
  | LoadSuccess
  | LoadFail
  | DeleteById
  | DeleteByIdSuccess
  | OpenAddEmployeeDialog
  | OpenEditEmployeeDialog
