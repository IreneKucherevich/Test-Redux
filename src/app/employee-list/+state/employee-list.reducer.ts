import {EmployeeActionTypes, fromEmployeeActions} from "./employee-list.actions"
import {Employee} from "../employee-list.component";

export interface EmployeeListState {
  employeeList: Employee[];
  error: string;
}

export const initialState: EmployeeListState = {
  employeeList: [],
  error: '',
};


export function employeeListReducer(state: EmployeeListState = initialState, action: fromEmployeeActions) {
  switch (action.type) {
    case EmployeeActionTypes.loadSuccess:
      return {...state, employeeList: action.employees};
    default:
      return state;

  }

}
