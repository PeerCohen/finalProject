import { Component, OnInit } from '@angular/core';
import { InventDetails } from 'src/app/shared/modals/invent-details';
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
  takeawayOrderList:InventDose[]=[];
  resurantOrderList:InventDose[]=[];
  sendOrderList:InventDose[]=[];

  ngOnInit(): void {
    this.employeeManagerService.getAllVisiterOrder().subscribe(
      (res: any) => {
        this.listOrder = res;
        console.log(this.listOrder);
        this.sortOrder();        
      },
      (err) => {
        this.error = err;
      })
  }
// 1	הזמנת שולחן                                       
// 2	משלוח                                             
// 3	איסוף מהסניף                                      
// 4	בסניף                                             
  sortOrder(){
    this.listOrder.forEach(o => {
      if(o.status==1)
      this.resurantOrderList.push(o);
      else if (o.status==2)
      this.sendOrderList.push(o);
      else if (o.status==3)
      this.takeawayOrderList.push(o);
      else if (o.status==4)
      this.resurantOrderList.push(o);
    });
  }
  // convertIdToValue(){
  //   this.resurantOrderList.forEach(o=>
  //     o.idVisiter=
  //     )
  // }
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
        return this.visiterOrder.name;     
      },
      (err) => {
        this.error = err;
      })
  }
}
