import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {EmployeeService} from "../../employee.service";
import {Employee} from "../../models/employee.model";

@Component({
  selector: 'app-add-edit-employee-dialog',
  templateUrl: './add-edit-employee-dialog.component.html',
  styleUrls: ['./add-edit-employee-dialog.component.scss']
})
export class AddEditEmployeeDialogComponent implements OnInit {
  public addEmployeeForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddEditEmployeeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private employeeService: EmployeeService) {
  }

  ngOnInit() {
    this.initform()
  }

  close(): void {
    this.dialogRef.close();
  }

  save(): void {
    const employee: Employee = {
      id: this.addEmployeeForm.controls['id'].value,
      firstName: this.addEmployeeForm.controls['firstName'].value,
      lastName: this.addEmployeeForm.controls['lastName'].value,
      salary: this.addEmployeeForm.controls['salary'].value
    };

    this.employeeService.addEmployee(employee);
    this.dialogRef.close();
  }

  private initform(): void {
    this.addEmployeeForm = new FormGroup({
      id: new FormControl({
        value: '',
        disabled: false,
      }, Validators.required),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      salary: new FormControl('', Validators.required),
    });
  }

}
