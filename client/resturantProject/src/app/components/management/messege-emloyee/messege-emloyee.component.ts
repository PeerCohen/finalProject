import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { ManagerMessege } from 'src/app/shared/modals/ManagerMessege';
import { ManagerService } from 'src/app/shared/services/manager.service';
import { UserService } from 'src/app/shared/services/user.service';
import { ManagerMassegeComponent } from '../manager-massege/manager-massege.component';

@Component({
  selector: 'app-messege-emloyee',
  templateUrl: './messege-emloyee.component.html',
  styleUrls: ['./messege-emloyee.component.css']
})
export class MessegeEmloyeeComponent implements OnInit {
  show: {[key: number]: boolean} = {};

  constructor(public userService: UserService , private managerService: ManagerService, 
    public dialog: MatDialog,
    private _bottomSheet: MatBottomSheet) { }
listMessege: ManagerMessege[]= new Array();
  ngOnInit(): void {
    this.userService.getAllMessege().subscribe(res =>{
     this.listMessege= res ;
     console.log(this.listMessege)
    })
  }
  openMessege(fromEmloyeeId:number)
  {
    console.log(this. userService.CurrentUser)
this.managerService.EmloyeeToMesseg.IdEmployee=fromEmloyeeId ;
this.managerService.EmloyeeToMesseg.fromEmloyeeId= this.userService.CurrentUser.id;
this.managerService.EmloyeeToMesseg.fromEmloyeeName= this.userService.CurrentUser.firstName;
console.log(this.managerService.EmloyeeToMesseg)

    this._bottomSheet.open(ManagerMassegeComponent);
  }
  showAllMessege(m, index)
  {
    this.show[index] = true;

    this.userService.EditReadMessege(m).subscribe(res=> console.log("sucsess!!"))
  }

}
