import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { Menu } from '../modals/menu';
import { Subject, Observable } from 'rxjs';
import { InventDose } from '../modals/invent-dose';

@Injectable({
  providedIn: 'root'
})
export class VisitersOrderManagementService {
  
  URL: string = "http://localhost:51437/api/Visiters/";
  subjectCart = new Subject();
  cart: Menu[] = [];

  constructor(public httpClient: HttpClient, private userService: UserService) { }

  idCurrentUser=this.userService.CurrentUser;

  getAllOrder(idVisiter: number): Observable<InventDose[]> {
    return this.httpClient.get<InventDose[]>(`${this.URL}/GetInvent${this.idCurrentUser}`);
  }
  addInvent() {
    debugger;
    return this.httpClient.post(`${this.URL}/AddDose${this.idCurrentUser}`,this.userService.InventDose);
    
  }


  addOrderToCart(itemId: number) {
    if (this.userService.CurrentUser) {
      if (!this.userService.InventDose)
        this.userService.InventDose = new InventDose();
      let dose: InventDose = { ...this.userService.InventDose };
      dose.inventDetails.push({ idDose: 0, idMenu: itemId, amount: 0 });      
      this.userService.InventDose = dose;
      this.subjectCart.next(this.cart);
      return this.cart;
    }
    else
      return false;
  }
}




