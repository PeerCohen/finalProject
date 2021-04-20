import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { VisitersOrderManagementService } from 'src/app/shared/services/visiters-order-management.service';
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
  close: any;

  constructor(public dialog: MatDialog, private router: Router, public visiterOrder: VisitersOrderManagementService) { }

  ngOnInit(): void {
  }

  setTableOrder() {
    const dialogRef = this.dialog.open(DialogSaveTableComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['/home']);
      // this.addressVisiter = result
      // this.optionOrder = "הזמנת שולחן";
      // this.isOpen = true;
    });

  }
  setSending() {
    const dialogRef = this.dialog.open(DialogSendingComponent, {
      data: { close: this.close }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result)
        this.router.navigate(['/home']);
      else {
        this.visiterOrder.idStatusInvent = 2;
        this.optionOrder = "משלוח";
        this.isOpen = true;
      }

    });


  }
  setTakeAway() {
    this.visiterOrder.idStatusInvent = 3;
    this.optionOrder = "איסוף מהסניף";
    this.isOpen = true;
  }
}
