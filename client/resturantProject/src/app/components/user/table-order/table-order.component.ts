import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogSaveTableRequestComponent } from '../dialog-save-table-request/dialog-save-table-request.component';

@Component({
  selector: 'app-table-order',
  templateUrl: './table-order.component.html',
  styleUrls: ['./table-order.component.css']
})
export class TableOrderComponent implements OnInit {
  minDate: Date;
  maxDate: Date;

  orderTableFrom: FormGroup;
  constructor(public dialog:MatDialog) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear-currentYear);
    this.maxDate = new Date(currentYear + 7, 0, 21);
   }

  ngOnInit(): void {
    this.orderTableFrom = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      tel: new FormControl(' ',Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      countOfPeople: new FormControl(['',Validators.required, Validators.length<20]),
      date: new FormControl(new Date()),
      time: new FormControl('', [Validators.required]),
      note: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    })
  }


  onFormSubmit(){
    const dialogRef = this.dialog.open(DialogSaveTableRequestComponent,{ data: this.orderTableFrom.controls.date.value })

  }
  getErrorMessageDate(){
    if (this.orderTableFrom.controls.date.hasError('required')) {
      return 'שדה חובה';
    }
    if(this.orderTableFrom.controls.date.value<Date.now()-1)
    return 'תאריך '
  }
  getErrorMessage() {
    if (this.orderTableFrom.controls.email.hasError('required')) {
      return 'שדה חובה';
    }
    return this.orderTableFrom.controls.email.hasError('email') ? 'מייל לא חוקי' : '';
  }
}
