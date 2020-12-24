import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restauran-table',
  templateUrl: './restauran-table.component.html',
  styleUrls: ['./restauran-table.component.css']
})
export class RestauranTableComponent implements OnInit {

  numberOfTable:string; 
  startOrder:boolean;
  constructor() { }

  ngOnInit(): void {
    this.numberOfTable=localStorage.getItem("numTable")
  }

  getOrder(){
    this.startOrder=true;
  }
}
