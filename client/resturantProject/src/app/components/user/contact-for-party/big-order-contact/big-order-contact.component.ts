import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-order-contact',
  templateUrl: './big-order-contact.component.html',
  styleUrls: ['./big-order-contact.component.css']
})
export class BigOrderContactComponent implements OnInit {

  kind:string="הזמנות גדולות";
  constructor() { }

  ngOnInit(): void {
  }

}
