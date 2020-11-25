import { Component, OnInit } from '@angular/core';
import { InventDose } from 'src/app/shared/modals/invent-dose';
import { EmployeeManagerService } from 'src/app/shared/services/employee-manager.service';
import { MenuService } from 'src/app/shared/services/menu.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-customers-order',
  templateUrl: './customers-order.component.html',
  styleUrls: ['./customers-order.component.css']
})
export class CustomersOrderComponent implements OnInit {
  error: any;
  menuOrder: any;
  visiterOrder: any;

  constructor(public employeeManagerService: EmployeeManagerService,public menuService:MenuService,public userService:UserService) { }
  listOrder: InventDose[] = []

  ngOnInit(): void {
    this.employeeManagerService.getAllVisiterOrder().subscribe(
      (res: any) => {
        this.listOrder = res;
        console.log(this.listOrder);        
      },
      (err) => {
        this.error = err;
      })
  }
  getDoseName(idDose){
    this.menuService.getMenuById(idDose).subscribe(
      (res: any) => {
        this.menuOrder = res;
        console.log(this.menuOrder);        
      },
      (err) => {
        this.error = err;
      })
  }

  getVisiterName(idVisiter){
    this.userService.getVisiterById(idVisiter).subscribe(
      (res: any) => {
        this.visiterOrder = res;
        console.log(this.visiterOrder);        
      },
      (err) => {
        this.error = err;
      })
  }
}
