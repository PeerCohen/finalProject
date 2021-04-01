import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Employee } from 'src/app/shared/modals/employee';
import { ManagerService } from 'src/app/shared/services/manager.service';

@Component({
  selector: 'app-edit-worker-dialog',
  templateUrl: './edit-worker-dialog.component.html',
  styleUrls: ['./edit-worker-dialog.component.css']
})
export class EditWorkerDialogComponent implements OnInit {

  emp:Employee={
    Id: 0,
    FirstName:"",
    LastName: "",
    Tz: "",
    Phone: "",
    idEmployeeType:0,
    Address:"",
  }
  Succeeded: any;
  error: any;
  constructor(public managerService:ManagerService,@Inject(MAT_DIALOG_DATA) public data: any) {
    debugger;
    this.emp.Id=data.id;
    this.emp.FirstName = data.firstName;
    this.emp.LastName = data.lastName;
    this.emp.Tz = data.tz;
    this.emp.Phone = data.phone;
    this.emp.Address = data.address;
    this.emp.idEmployeeType = data.idEmployeeType;
   }

  ngOnInit(): void {
  }
editWorkerDetails(){
  this.managerService.editWorker(this.emp).subscribe(
    (res: any) => {
      this.Succeeded = res;
    },
    (err) => {
      this.error = err;
    });;
}
}
