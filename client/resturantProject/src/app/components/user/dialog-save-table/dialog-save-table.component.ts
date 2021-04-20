import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-dialog-save-table',
  templateUrl: './dialog-save-table.component.html',
  styleUrls: ['./dialog-save-table.component.css']
})
export class DialogSaveTableComponent implements OnInit {
  name: any;
  isClose: boolean;

  constructor(public dialogRef: MatDialogRef<DialogSaveTableComponent>,public userService:UserService,private router: Router) { }

  ngOnInit(): void {
    this.name=this.userService.userName;
  }
  getEmit(close: boolean) {
    this.isClose = close;
  }

  goBack(){
    this.router.navigate(['/home']);
     this.dialogRef.close();
  }
}
