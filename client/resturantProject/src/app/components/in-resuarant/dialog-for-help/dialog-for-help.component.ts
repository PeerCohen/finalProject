import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-for-help',
  templateUrl: './dialog-for-help.component.html',
  styleUrls: ['./dialog-for-help.component.css']
})
export class DialogForHelpComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogForHelpComponent>) { }

  ngOnInit(): void {
  }
  close(): void {
    this.dialogRef.close();
  }

}
