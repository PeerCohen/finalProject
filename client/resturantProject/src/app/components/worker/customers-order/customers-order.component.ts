import { Component, OnInit } from '@angular/core';
import { InventDose } from 'src/app/shared/modals/invent-dose';
import { EmployeeManagerService } from 'src/app/shared/services/employee-manager.service';

@Component({
  selector: 'app-customers-order',
  templateUrl: './customers-order.component.html',
  styleUrls: ['./customers-order.component.css']
})
export class CustomersOrderComponent implements OnInit {
  error: any;

  constructor(public employeeManagerService: EmployeeManagerService) { }
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

}
