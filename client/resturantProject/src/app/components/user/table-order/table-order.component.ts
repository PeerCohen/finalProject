import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-table-order',
  templateUrl: './table-order.component.html',
  styleUrls: ['./table-order.component.css']
})
export class TableOrderComponent implements OnInit {

  orderTableFrom: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.orderTableFrom = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      tel: new FormControl([' ',Validators.required, Validators.length==10]),
      email: new FormControl('', [Validators.required, Validators.email]),
      countOfPeople: new FormControl(['',Validators.required, Validators.length<20]),
      date: new FormControl(new Date()),
      time: new FormControl('', [Validators.required]),
      note: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    })
  }


  getErrorMessage() {
    if (this.orderTableFrom.controls.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.orderTableFrom.controls.email.hasError('email') ? 'Not a valid email' : '';
  }
}
