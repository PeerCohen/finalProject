import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { DialogSaveTableComponent } from '../dialog-save-table/dialog-save-table.component';
import { DialogSendingComponent } from '../dialog-sending/dialog-sending.component';

@Component({
  selector: 'app-option-order',
  templateUrl: './option-order.component.html',
  styleUrls: ['./option-order.component.css']
})
export class OptionOrderComponent implements OnInit {
  optionOrder: string;
  isOpen: boolean = false;
  addressVisiter: any;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  setTableOrder() {
    const dialogRef = this.dialog.open(DialogSaveTableComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.addressVisiter = result
      this.optionOrder = "הזמנת שולחן";
      this.isOpen = true;
    });

  }
  setSending() {
    const dialogRef = this.dialog.open(DialogSendingComponent);
    debugger;
    dialogRef.afterClosed().subscribe(result => {
      this.addressVisiter = result
      this.optionOrder = "משלוח";
      this.isOpen = true;
    });


  }
  setTakeAway() {

    this.optionOrder = "איסוף מהסניף";
    this.isOpen = true;
  }
}
