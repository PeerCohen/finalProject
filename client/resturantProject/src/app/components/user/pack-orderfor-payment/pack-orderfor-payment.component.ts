
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';
import { VisitersOrderManagementService } from 'src/app/shared/services/visiters-order-management.service';

@Component({
  selector: 'app-pack-orderfor-payment',
  templateUrl: './pack-orderfor-payment.component.html',
  styleUrls: ['./pack-orderfor-payment.component.css']
})
export class PackOrderforPaymentComponent implements OnInit {
  doneInvent: any[];
  Totalprice: number;

  constructor(public router:Router,public visitersOrderManagementService:VisitersOrderManagementService,public userService:UserService) { }

  ngOnInit(): void {
   this.doneInvent =  this.visitersOrderManagementService.fullCart;
   this.Totalprice = this.visitersOrderManagementService.Totalprice;
  }
  goBack(){
    this.visitersOrderManagementService.disableInventCart=false;    
    this.visitersOrderManagementService.disablePrePaymentCart=false;  

  }
  setPayment(){
    this.visitersOrderManagementService.disablePrePaymentCart=false;  
      this.visitersOrderManagementService.addInvent().subscribe(res => {
      })
      this.router.navigate(['/payment']);
      this.visitersOrderManagementService.disableInventCart=true;
      this.visitersOrderManagementService.fullCart=[];
    }
  }
