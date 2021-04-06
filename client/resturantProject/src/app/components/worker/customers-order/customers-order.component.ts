import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InventDetails } from 'src/app/shared/modals/invent-details';
import { InventDose } from 'src/app/shared/modals/invent-dose';
import { EmployeeManagerService } from 'src/app/shared/services/employee-manager.service';
import { MenuService } from 'src/app/shared/services/menu.service';
import { UserService } from 'src/app/shared/services/user.service';
import { ErrorDialogCounthandleDoseComponent } from '../error-dialog-counthandle-dose/error-dialog-counthandle-dose.component';

@Component({
  selector: 'app-customers-order',
  templateUrl: './customers-order.component.html',
  styleUrls: ['./customers-order.component.css']
})
export class CustomersOrderComponent implements OnInit {
  error: any;
  menuOrder: any;
  visiterOrder: any;
  handleArrTW: any;
  handleArrSend: any;
  handleArrRest: any;
  countOfhandle: number = 0;


  constructor(public employeeManagerService: EmployeeManagerService,
     public menuService: MenuService,
      public userService: UserService,
      public dialog: MatDialog) { }
  listOrder: InventDose[] = []
  takeawayOrderList: InventDose[] = [];
  resurantOrderList: InventDose[] = [];
  sendOrderList: InventDose[] = [];
  resurantTableOrderList: InventDose[] = [];

  ngOnInit(): void {
    this.employeeManagerService.getAllVisiterOrder().subscribe(
      (res: any) => {
        this.listOrder = res;
        console.log(this.listOrder);
        this.sortOrder();
        console.log(this.sendOrderList);
        console.log(this.takeawayOrderList);
      },
      (err) => {
        this.error = err;
      })
  }
  showError(): void {
    const dialogRef = this.dialog.open(ErrorDialogCounthandleDoseComponent);
  }
  getNameMenu() {
  }
  // 1	הזמנת שולחן                                       
  // 2	משלוח                                             
  // 3	איסוף מהסניף                                      
  // 4	בסניף                                             
  sortOrder() {
    debugger;
    this.listOrder.forEach(o => {
      if (o.statusName == "בסניף")
        this.resurantOrderList.push(o);
      else if (o.statusName == "משלוח")
        this.sendOrderList.push(o);
      else if (o.statusName == "איסוף מהסניף")
        this.takeawayOrderList.push(o);
      else if (o.statusName == "הזמנת שולחן")
        this.resurantTableOrderList.push(o);
    });
  }
  // convertIdToValue(){
  //   this.resurantOrderList.forEach(o=>
  //     o.idVisiter=
  //     )
  // }
  getDoseName(idDose) {
    this.menuService.getMenuById(idDose).subscribe(
      (res: any) => {
        this.menuOrder = res;
        console.log(this.menuOrder);
      },
      (err) => {
        this.error = err;
      })
  }
  handleTakeAwat(o: InventDose) {
    this.handleArrTW.push(o);
    this.countOfhandle++;
  }
  handleSend(o: InventDose) {
    this.handleArrSend.push(o);
    this.countOfhandle++;
  }
  handleRest(o: InventDose) {
    this.handleArrRest.push(o);
    this.countOfhandle++;
  }
  getVisiterName(idVisiter) {
    this.userService.getVisiterById(idVisiter).subscribe(
      (res: any) => {
        this.visiterOrder = res;
        return this.visiterOrder.name;
      },
      (err) => {
        this.error = err;
      })
  }
}
