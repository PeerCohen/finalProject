import { Component, OnInit } from '@angular/core';
import { ManagerService } from 'src/app/shared/services/manager.service';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-special-order',
  templateUrl: './special-order.component.html',
  styleUrls: ['./special-order.component.css']
})
export class SpecialOrderComponent implements OnInit {

  orderList: any;
  constructor(public managerService: ManagerService) {

  }

  ngOnInit(): void {
    this.managerService.specialOrder.subscribe((res: number) => {
      this.orderList = res;
      console.log(this.orderList);
      
    })
  }
  


}
