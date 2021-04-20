import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-dialog-save-table-request',
  templateUrl: './dialog-save-table-request.component.html',
  styleUrls: ['./dialog-save-table-request.component.css']
})
export class DialogSaveTableRequestComponent implements OnInit {
  date: any;

  constructor(public userService:UserService,public dialogRef: MatDialogRef<DialogSaveTableRequestComponent>,@Inject(MAT_DIALOG_DATA) public data: any) { 
    this.date=data.data;
   }

  ngOnInit(): void {
  }
close(){
  const tabCount = 7;
  this.userService.indexTab = (0) % tabCount;
  this.dialogRef.close();
}
}
