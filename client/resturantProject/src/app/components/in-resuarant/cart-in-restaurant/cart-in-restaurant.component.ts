import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { InRestaurantService } from 'src/app/shared/services/in-restaurant.service';
import { RemoveProductComponent } from '../../user/dialogs/remove-product/remove-product.component';
import { DialogForInventComponent } from '../dialog-for-invent/dialog-for-invent.component';

@Component({
  selector: 'app-cart-in-restaurant',
  templateUrl: './cart-in-restaurant.component.html',
  styleUrls: ['./cart-in-restaurant.component.css']
})
export class CartInRestaurantComponent implements OnInit {
  itemsInCart: any = [];
  numInvent: string;
  Totalprice: number = 0;
  doneInvent: any;
  isAcceptance: boolean;
  cartBox: boolean;
  closeCart: any;

  constructor(public inRestaurant: InRestaurantService, public dialog: MatDialog, public router: Router) { }

  ngOnInit(): void {
    
    this.itemsInCart = this.inRestaurant.fullCart;
    this.inRestaurant.subjectCart.subscribe(res=>{
      debugger;
      this.itemsInCart = this.inRestaurant.fullCart;
    })
    this.Totalprice = this.inRestaurant.Totalprice;
    console.log(this.itemsInCart);
    this.numInvent = localStorage.getItem("numTable")
  }
  addInventInRes() {
    const dialogRef = this.dialog.open(DialogForInventComponent, {
      data: { price: this.Totalprice }
    });
    dialogRef.afterClosed().subscribe(res => {
      this.saveInvent();
    })
  }
  saveInvent() {
    this.doneInvent =[...this.itemsInCart] ;
    console.log(this.doneInvent);
    this.inRestaurant.presentCart=false;
   // this.itemsInCart = [];
    this.isAcceptance = true;
  }
  removeOrder(){
    this.itemsInCart = [];
    this.inRestaurant.fullCart=[];
    this.inRestaurant.presentCart=false;
  }
  openDialogRemoveInRes(itemId, index) {
    var num=1;
    console.log(this.itemsInCart.length)
    var dialog = this.dialog.open(RemoveProductComponent, { data: { itemId, index,num, close: this.closeCart } });
    dialog.afterClosed().subscribe(result => {
      this.closeCart = result;
      if (this.itemsInCart.length == 0)
      this.inRestaurant.presentCart=false;
      console.log(this.closeCart);
      console.log(this.itemsInCart.length)

    });
  }
  changeMode(){
    this.isAcceptance = false;
    this.inRestaurant.presentCart=true;
  }
  addProductInRes(item) {
    item.amount++;
    console.log(this.itemsInCart);
  }
  lessProductInRes(item) {
    if (item.amount > 1) {
      item.amount--;

    }
  }
  setPayment() {
    this.itemsInCart = [];
    this.router.navigate(['/paymentInRes']);
  }
  isOpen() {
    if (this.itemsInCart&&this.itemsInCart.length==0)
      return false
    else return true;
  }

  getTotal() {
    if (this.itemsInCart&&this.itemsInCart.length>0) {
      this.Totalprice = 0;
      this.itemsInCart.forEach(item => {
        this.Totalprice += item.price * item.amount
      });
      return this.Totalprice;
    }

  }

}
