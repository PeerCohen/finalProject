import { Component, OnInit, Inject } from '@angular/core';
import { VisitersOrderManagementService } from 'src/app/shared/services/visiters-order-management.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InRestaurantService } from 'src/app/shared/services/in-restaurant.service';

@Component({
  selector: 'app-remove-product',
  templateUrl: './remove-product.component.html',
  styleUrls: ['./remove-product.component.css']
})
export class RemoveProductComponent implements OnInit {

  id: number;
  index: number;
  itemsInCart: any[];
  display: number;
  itemsInCartInRes: any[];
  constructor(private inRes:InRestaurantService,private visitersOrderManagementService: VisitersOrderManagementService,
    @Inject(MAT_DIALOG_DATA) public data: { itemId: number, index: number,num:number, close: boolean }) {
    this.id = data.itemId;
    this.display=data.num;
    this.index = data.index;
  }

  ngOnInit(): void {
    this.itemsInCart = this.visitersOrderManagementService.fullCart;
    this.itemsInCartInRes = this.inRes.fullCart;

  }

  MinusProductAmount() {
if(!this.display){
  this.itemsInCart.splice(this.index, 1);
  this.visitersOrderManagementService.removeProduct(this.id);    
  if (this.itemsInCart.length == 1)
  this.data.close = true;
}
else{
  this.itemsInCartInRes.splice(this.index, 1);
  this.inRes.removeProduct(this.id);    
  if (this.itemsInCartInRes.length == 1)
  this.data.close = true;

}
    
  }
}
