import {NgModule} from '@angular/core';
import {AddEditEmployeeDialogComponent} from "./add-edit-employee-dialog/add-edit-employee-dialog.component";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {CommonModule} from "@angular/common";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import { DeleteConfirmDialogComponent } from './delete-confirm-dialog/delete-confirm-dialog.component';

@NgModule({
  imports: [
    MatDialogModule,
    MatButtonModule,
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  exports: [],
  declarations: [AddEditEmployeeDialogComponent, DeleteConfirmDialogComponent],
  entryComponents: [AddEditEmployeeDialogComponent, DeleteConfirmDialogComponent],
  providers: []
})

export class SharedModule {
}
