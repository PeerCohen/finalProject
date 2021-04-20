import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { InventDetails } from '../modals/invent-details';
import { Menu } from '../modals/menu';

@Injectable({
  providedIn: 'root'
})
export class InRestaurantService {
  
  fullCart: any[]=[];
  cart: any[]=[];
  subjectCart = new Subject();
  Totalprice: number=0;
  presentCart:boolean;
  URL: string = "http://localhost:51437/api/Employees";


  constructor(public http:HttpClient) { }
  callWaiter(message:string){
    return this.http.post<any>(`${this.URL}/messageForHelp`,message);
  }
  removeProduct(idProduct){

    let item = this.fullCart.find(p => p.idMenu == idProduct)
    debugger;
    //this.cart.remove(item);
  }
  addToCartInRestaurant(item: Menu) {
    this.presentCart=true;
    item.amount = 1;
    this.fullCart.push(item);
    this.Totalprice+=item.price;
    debugger;
    this.cart.push(this.castMenuToInvetDetails(item));
    this.subjectCart.next(this.cart);
    return this.cart;
  }
  castMenuToInvetDetails(item: Menu) {
    let invent = new InventDetails();
    invent.idMenu = item.id;
    invent.amount = 1;
    return invent;
  }
}
