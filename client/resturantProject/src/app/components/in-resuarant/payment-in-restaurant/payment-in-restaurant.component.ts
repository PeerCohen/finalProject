import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {
  IPayPalConfig,
  ICreateOrderRequest
} from 'ngx-paypal';
import { DialogForInventComponent } from '../dialog-for-invent/dialog-for-invent.component';
import { DialogForPaymentComponent } from '../dialog-for-payment/dialog-for-payment.component';
@Component({
  selector: 'app-payment-in-restaurant',
  templateUrl: './payment-in-restaurant.component.html',
  styleUrls: ['./payment-in-restaurant.component.css']
})
export class PaymentInRestaurantComponent implements OnInit {

  constructor(public router:Router,public dialog: MatDialog) { }
  
  public payPalConfig?: IPayPalConfig;
  showSuccess: boolean;
  showError: boolean;

  ngOnInit(): void {
    this.initConfig();
  }

  private initConfig(): void {
    this.payPalConfig = {
      currency: 'EUR',
      clientId: 'sb',
      advanced: {
        commit: 'true'
      },
      style: {
        label: 'paypal',
        layout: 'vertical'
      },
      onApprove: (data, actions) => {
        console.log('onApprove - transaction was approved, but not authorized', data, actions);
        actions.order.get().then(details => {
          console.log('onApprove - you can get full order details inside onApprove: ', details);
        });

      },
      onClientAuthorization: (data) => {
        console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
        this.showSuccess = true;
      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);
       // this.showCancel = true;

      },
      onError: err => {
        console.log('OnError', err);
        this.showError = true;
      },
      onClick: (data, actions) => {
        console.log('onClick', data, actions);
        //this.resetStatus();
      },
    };
  }

  payment(){
    const dialogRef = this.dialog.open(DialogForPaymentComponent);
    dialogRef.afterClosed().subscribe(res=>{
      this.router.navigate(['/in-restaurant-table']);
    })    
  }
  paymentWithCash(){
    this.router.navigate(['/in-restaurant-table']);
  }

}
