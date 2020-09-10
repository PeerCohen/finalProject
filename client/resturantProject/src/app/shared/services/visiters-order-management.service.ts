import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { Menu } from '../modals/menu';
import { Subject, Observable } from 'rxjs';
import { InventDose } from '../modals/invent-dose';
import { InventDetails } from '../modals/invent-details';

@Injectable({
  providedIn: 'root'
})
export class VisitersOrderManagementService {


  URL: string = "http://localhost:51437/api/Visiters/";
  subjectCart = new Subject();
  cart: InventDetails[] = [];

  constructor(public httpClient: HttpClient, private userService: UserService) { }

  idCurrentUser = this.userService.CurrentUser;

  getAllOrder(idVisiter: number): Observable<InventDose[]> {
    return this.httpClient.get<InventDose[]>(`${this.URL}/GetInvent${this.idCurrentUser}`);
  }
  addInvent() {
    debugger;
    return this.httpClient.post(`${this.URL}/AddDose${this.idCurrentUser}`, this.userService.InventDose);

  }
  castMenuToInvetDetails(item: Menu){
    let invent = new InventDetails();
    invent.idMenu = item.id;
    invent.amount = 1;
    return invent;
  }

  addOrderToCart(item: Menu) {
    debugger;
    if (this.userService.CurrentUser) {
      this.cart.push(this.castMenuToInvetDetails(item));  
      this.userService.setInvetDetails(this.userService.InventDose, this.cart);
     // let dose: InventDose = { ...this.userService.InventDose };
     // dose.inventDetails.push({ idDose: 0, idMenu: itemId, amount: 0 });
      // this.userService.InventDose = dose;
      this.subjectCart.next(this.cart);
      return this.cart;
    }
    else
      return false;
  }
  removeProduct(id) {
    var dos: InventDose[] = JSON.parse(localStorage.getItem("currentInvent"));
    dos = dos.filter(p => p.inventDetails.filter(pp => pp.idMenu != id).length > 0);
    localStorage.setItem("currentInvent",JSON.stringify(dos));
  }
}




