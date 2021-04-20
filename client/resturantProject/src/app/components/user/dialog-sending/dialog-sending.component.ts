import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-dialog-sending',
  templateUrl: './dialog-sending.component.html',
  styleUrls: ['./dialog-sending.component.css']
})
export class DialogSendingComponent implements OnInit {
  name:string;
  address:string;

  constructor(public userService:UserService,public dialogRef: MatDialogRef<DialogSendingComponent>
    ,@Inject(MAT_DIALOG_DATA) public data: any) { 
    data=this.address
   }
   getEmit(close:boolean){

  }

  ngOnInit(): void {
    this.name=this.userService.userName;
  }

  goForOrder(){

    this.data=this.address

  }
  cancel(): void {
      this.dialogRef.close();    
  }
}
