import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-for-add-to-cart',
  templateUrl: './dialog-for-add-to-cart.component.html',
  styleUrls: ['./dialog-for-add-to-cart.component.css']
})
export class DialogForAddToCartComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogForAddToCartComponent>) { }

  ngOnInit(): void {
  }
  close(): void {
    this.dialogRef.close();
  }
}
