import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { Menu } from '../modals/menu';
import { Subject, Observable } from 'rxjs';
import { InventDose } from '../modals/invent-dose';
import { InventDetails } from '../modals/invent-details';
import { Comment } from '../modals/comment';

@Injectable({
  providedIn: 'root'
})
export class VisitersOrderManagementService {

  BaseUrl = "http://localhost:51437/api";
  URL: string = "http://localhost:51437/api/Visiters";
  subjectCart = new Subject();
  cart: InventDetails[] = [];
  fullCart:any[]=[];
  Totalprice: number=0;
  disableInventCart: boolean;
  idStatusInvent: number=0;

  constructor(public httpClient: HttpClient, private userService: UserService) {
    // if(this.userService.InventDose.inventDetails!=null)
    // this.cart = this.userService.InventDose.inventDetails;
  }

  idCurrentUser = this.userService.CurrentUser?.id;

  removeProduct(idProduct){

    let item = this.cart.find(p => p.idMenu == idProduct)
    debugger;
    //this.cart.remove(item);
  }
  addComment(comment:Comment): Observable<any>{
    //var newComment=new Comment();
   // newComment.Comment=comment;
    //newComment.idvisiter=this.idCurrentUser ;
    debugger;
    return this.httpClient.post<any>(`${this.BaseUrl}/CommentVisiter/AddComment`,comment);
  }

  getAllOrder(idVisiter: number): Observable<InventDose[]> {
    return this.httpClient.get<InventDose[]>(`${this.BaseUrl}/InventDose/GetInvent/${idVisiter}`);
  }
  rating(r:InventDose): Observable<any> {
    debugger;
    return this.httpClient.post<any>(`${this.BaseUrl}/InventDose/updateRating`, r);
  }
  getfeedbackForOrderDose(): Observable<any> {
    debugger;
    return this.httpClient.get<any>(`${this.BaseUrl}/InventDose/favoriteDose`);
  }
  addfeedbackForOrderDose(o: InventDose,feedback:string): Observable<any> {
    debugger;
   // return this.httpClient.put<UserCalandar>(this.URLEm + 'SineOut/' + this.CurrentUser.id + , date);

    return this.httpClient.post<any>(`${this.BaseUrl}/InventDose/addfeedback`, o);
  }
  addInvent() {
    var inventDetails = JSON.parse(localStorage.getItem("currentInvent")).inventDetails;
    var vis = new InventDose();
    var user = JSON.parse(localStorage.getItem("currentUser")).id;
    vis.idVisiter = user;
    vis.IdStatusInvent = this.idStatusInvent;
    vis.IdStatusDose=3;

    vis.inventDetails = [];


    inventDetails.forEach(element => {
      vis.inventDetails.push({ amount: element.amount, idMenu: element.idMenu })
    });
    this.httpClient.get(`${this.URL}/sendMail`);
    debugger;
    return this.httpClient.post(`${this.URL}/AddDose`, vis);
  }
  castMenuToInvetDetails(item: Menu) {
    let invent = new InventDetails();
    invent.idMenu = item.id;
    invent.amount = 1;
    return invent;
  }

  addOrderToCart(item: Menu) {
    if (this.userService.CurrentUser) {
      item.amount=1;
      this.disableInventCart=false;
      this.fullCart.push(item);
      this.Totalprice+=item.price;
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
  MinusProductAmount(itemId) {
    let item = this.fullCart.find(p => p.id == itemId);
    if (item && item.amount > 0) {
      item.amount--;
      this.userService.setInvetDetails(this.userService.InventDose, this.cart);
    }
  }
  plusProductAmount(itemId) {
    let item = this.fullCart.find(p => p.id == itemId);
    if (item) {
      item.amount++;
      this.userService.setInvetDetails(this.userService.InventDose, this.cart);
    }
  }
  cartIsEmpty() {
    return this.cart.length == 0;
  }
}




