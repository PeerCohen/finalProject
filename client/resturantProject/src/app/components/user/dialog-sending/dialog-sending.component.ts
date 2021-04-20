import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';
import { VisitersOrderManagementService } from 'src/app/shared/services/visiters-order-management.service';

@Component({
  selector: 'app-dialog-sending',
  templateUrl: './dialog-sending.component.html',
  styleUrls: ['./dialog-sending.component.css']
})
export class DialogSendingComponent implements OnInit {
  name:string;
  address:string;

  constructor(public visiterOrder:VisitersOrderManagementService,private router: Router,public userService:UserService,public dialogRef: MatDialogRef<DialogSendingComponent>
    ,@Inject(MAT_DIALOG_DATA) public data: any) { 
    data=this.address
   }
   getEmit(close:string){
console.log(close);
this.visiterOrder.addressUserOrder=close;
  }

  ngOnInit(): void {
    this.name=this.userService.userName;
  }

  goForOrder(){

    this.data=this.address
    this.dialogRef.close(false);

  }
  cancel(): void {
    this.dialogRef.close(true);  
  }
}
