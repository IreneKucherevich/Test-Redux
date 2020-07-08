import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EmployeeListComponent} from "./employee-list.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {BrowserModule} from "@angular/platform-browser";
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects'
import {employeeListReducer} from "./+state/employee-list.reducer";
import {EmployeeListEffects} from "./+state/employee-list.effects";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    MatFormFieldModule,
    MatTableModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    StoreModule.forFeature('employees', employeeListReducer),
    EffectsModule.forFeature([EmployeeListEffects]),
    SharedModule
  ],
  exports: [
    EmployeeListComponent
  ],
  declarations: [
    EmployeeListComponent
  ]
})
export class EmployeeListModule {
}
