import { Component, OnInit } from '@angular/core';
import { ManagerService } from 'src/app/shared/services/manager.service';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { VisitersOrderManagementService } from 'src/app/shared/services/visiters-order-management.service';
import { SpecialInvent } from 'src/app/shared/modals/special-invent';

@Component({
  selector: 'app-special-order',
  templateUrl: './special-order.component.html',
  styleUrls: ['./special-order.component.css']
})
export class SpecialOrderComponent implements OnInit {

  orderList: any;
  contact:boolean=false;
  editContact='';
  constructor(public managerService: ManagerService, public service: VisitersOrderManagementService) {

  }
  setStyle(event){
    var id=event.target.id ;
    var row=document.getElementById(id);   
      row.style.backgroundColor="red";
  }
  handleRequest(o:SpecialInvent,event){
    this.editContact='editContactC';
    this.managerService.updateSpecialOrder(o).subscribe((res) => { 
      this.getSpecialOrders();
      var idBtn=event.target.id
      var row=document.getElementById(idBtn.slice(3,1));
      row.style.backgroundColor="red";
  })}
  removeOrder(o){
    this.managerService.deleteSpecialOrder(o).subscribe((res) => {
      this.getSpecialOrders();
    })
  }
  ngOnInit(): void {
    this.getSpecialOrders();
    }
    getSpecialOrders(){
      this.managerService.getSpecialOrder().subscribe((res: SpecialInvent[]) => {
        this.orderList = res;
        console.log(this.orderList);
    });
    // this.managerService.specialOrder.subscribe((res: number) => {
    //   this.orderList = res;
    //   console.log(this.orderList);

    // })
  }



}
