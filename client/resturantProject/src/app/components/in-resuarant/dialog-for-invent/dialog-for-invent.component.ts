import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-for-invent',
  templateUrl: './dialog-for-invent.component.html',
  styleUrls: ['./dialog-for-invent.component.css']
})
export class DialogForInventComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogForInventComponent>,@Inject(MAT_DIALOG_DATA) public data: {price: string}) { }

  ngOnInit(): void {
  }
  close(): void {
    this.dialogRef.close();
  }

}
