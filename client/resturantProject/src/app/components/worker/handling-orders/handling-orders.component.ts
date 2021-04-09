import { Component, OnInit } from '@angular/core';
import { InventDose } from 'src/app/shared/modals/invent-dose';
import { EmployeeManagerService } from 'src/app/shared/services/employee-manager.service';
import { MenuService } from 'src/app/shared/services/menu.service';

@Component({
  selector: 'app-handling-orders',
  templateUrl: './handling-orders.component.html',
  styleUrls: ['./handling-orders.component.css']
})
export class HandlingOrdersComponent implements OnInit {
  prepaerlistOrder: any[]=[];
  error: any;

  constructor(public employeeManagerService: EmployeeManagerService, public menu: MenuService) { }

  ngOnInit(): void {
    this.getPrepaerDose()
  }
  getPrepaerDose() {
    this.employeeManagerService.getAllPrepaerVisiterOrder(1).subscribe(
      (res: any) => {
        this.prepaerlistOrder = res;
        console.log(this.prepaerlistOrder);
      },
      (err) => {
        this.error = err;
      })
  }
  finish(order: InventDose) {
    this.menu.updateStatusDose(order).subscribe((res) => {
      this.getPrepaerDose();
    }
    )
  }
}
