import { createFeatureSelector, createSelector } from '@ngrx/store';
import {EmployeeListState} from "./employee-list.reducer";

const getEmployeeListState = createFeatureSelector<EmployeeListState>('employees');

const loadEmployees = createSelector(
  getEmployeeListState,
  (state: EmployeeListState) => state.employeeList
);

export const EmployeeListQuery = {
  loadEmployees
};
