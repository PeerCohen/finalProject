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
  preOrders:InventDose[]=[];

  constructor(private visitersOrderManagementService:VisitersOrderManagementService,
    public userService:UserService) { }

  ngOnInit(): void {

    var userId=this.userService.CurrentUser.id;
    this.visitersOrderManagementService.getAllOrder(userId).subscribe(res=>{
      this.preOrders=res;
    })
  }

}
