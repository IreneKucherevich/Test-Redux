import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-delete-confirm-dialog',
  templateUrl: './delete-confirm-dialog.component.html',
  styleUrls: ['./delete-confirm-dialog.component.scss']
})
export class DeleteConfirmDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteConfirmDialogComponent>,) {
  }

  ngOnInit() {
  }

  confirm(): void {
    this.dialogRef.close(true)
  }

  reject(): void {
    this.dialogRef.close(false)
  }

}
