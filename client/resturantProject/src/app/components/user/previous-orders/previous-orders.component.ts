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
  stars = [1, 2, 3, 4, 5];
  rating = 1;
  hoverState = 0;

  constructor(private visitersOrderManagementService:VisitersOrderManagementService,
    public userService:UserService) { }

  ngOnInit(): void {

    var userId=JSON.parse( localStorage.getItem("currentUser")).ld;
    this.visitersOrderManagementService.getAllOrder(userId).subscribe(res=>{
      this.preOrders=res;
    })
  }
  
  onStarEnter(starId: number) {
    this.hoverState = starId
  }
  onStarLeave() {
    this.hoverState = 0;
  }
  onStarClicked(starId: number) {
    this.rating = starId;
  }

}
