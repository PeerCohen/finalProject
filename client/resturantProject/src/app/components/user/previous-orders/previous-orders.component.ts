// import { Component, OnInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { VisitersOrderManagementService } from 'src/app/shared/services/visiters-order-management.service';
import { UserService } from 'src/app/shared/services/user.service';
import { InventDetails } from 'src/app/shared/modals/invent-details';
import { InventDose } from 'src/app/shared/modals/invent-dose';

@Component({
  selector: 'app-previous-orders',
  templateUrl: './previous-orders.component.html',
  styleUrls: ['./previous-orders.component.css']
})
export class PreviousOrdersComponent implements OnInit {
  currentRate :number;
  preOrders: InventDose[] = [];
  commentContent:string;



  constructor(private visitersOrderManagementService: VisitersOrderManagementService,
    public userService: UserService) { }
    currentUser = JSON.parse(localStorage.getItem("currentUser"))?.ld;

  ngOnInit(): void {
    if(this.currentUser)
    {
      this.visitersOrderManagementService.getAllOrder(this.currentUser).subscribe(res => {
        console.log(res);
           this.preOrders = res;
         })
    }

  }

}
