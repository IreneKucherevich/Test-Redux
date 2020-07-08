import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add-edit-employee-dialog',
  templateUrl: './add-edit-employee-dialog.component.html',
  styleUrls: ['./add-edit-employee-dialog.component.scss']
})
export class AddEditEmployeeDialogComponent implements OnInit {
  // public addBuyerForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddEditEmployeeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }
  save(): void {

  }
  private initform() : void{

  }

}
