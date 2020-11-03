import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-option-order',
  templateUrl: './option-order.component.html',
  styleUrls: ['./option-order.component.css']
})
export class OptionOrderComponent implements OnInit {
  optionOrder: string;
  isOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  setTableOrder() {
    this.optionOrder = "הזמנת שולחן";
    this.isOpen = true;
  }
  setSending() {
    this.optionOrder = "משלוח";
    this.isOpen = true;

  }
  setTakeAway() {
    this.optionOrder = "איסוף מהסניף";
    this.isOpen = true;
  }
}
