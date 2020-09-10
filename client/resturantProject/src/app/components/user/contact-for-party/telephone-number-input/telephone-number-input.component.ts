import { Component, OnInit } from '@angular/core';
import {  FormControl,  FormGroup,} from '@angular/forms';

@Component({
  selector: 'app-telephone-number-input',
  templateUrl: './telephone-number-input.component.html',
  styleUrls: ['./telephone-number-input.component.css']
})
export class TelephoneNumberInputComponent implements OnInit {

  
  ngOnInit(): void {
  }
  form: FormGroup = new FormGroup({
    tel: new FormControl(new MyTel('', '', ''))
  });
}
/** Data structure for holding telephone number. */
export class MyTel {
  constructor(
    public area: string,
    public exchange: string,
    public subscriber: string
  ) {}
}


