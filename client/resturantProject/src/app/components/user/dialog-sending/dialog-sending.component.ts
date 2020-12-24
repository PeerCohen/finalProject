import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-dialog-sending',
  templateUrl: './dialog-sending.component.html',
  styleUrls: ['./dialog-sending.component.css']
})
export class DialogSendingComponent implements OnInit {
  name:string;

  constructor(public userService:UserService,public dialogRef: MatDialogRef<DialogSendingComponent>,
    ) { }

  ngOnInit(): void {
    this.name=this.userService.userName;
  }

  onOkClick(){

  }
    onNoClick(): void {
      this.dialogRef.close();    
  }
}
