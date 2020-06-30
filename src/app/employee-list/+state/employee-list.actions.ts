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

import { Action } from '@ngrx/store';
import {Employee} from "../employee-list.component";

export enum EmployeeActionTypes {

  loading ='[Employee] Load',
  loadSuccess = '[Employee] Load Success',
  loadFail = '[Employee] Load Fail'
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

  constructor( public error: string) {
  }
}

export type fromEmployeeActions =
  Loading | LoadSuccess | LoadFail;
