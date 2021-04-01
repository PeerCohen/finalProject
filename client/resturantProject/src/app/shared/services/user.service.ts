import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignUp } from '../modals/sign-up';
import { Visiters } from '../modals/visiters';
import { Observable } from 'rxjs';
import { InventDose } from '../modals/invent-dose';
import { InventDetails } from '../modals/invent-details';
import { UserCalandar } from '../modals/UserCalandar';
import { ManagerMessege } from '../modals/ManagerMessege';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  keys = {
    USER_KEY: "currentUser",
    INVENT_KEY: "currentInvent"
  };
  invent: InventDose;

  URL: string = "http://localhost:51437/api/Visiters/";
  URLEm = "http://localhost:51437/api/Employees/";
  singIn: boolean = false;
  userName: any;
  lastEnterDate: any;
  set CurrentUser(v: any) {
    if (v)
      localStorage.setItem(this.keys.USER_KEY, JSON.stringify(v));
  }
  get CurrentUser(): any {
    return JSON.parse(localStorage.getItem(this.keys.USER_KEY));
  }
  set InventDose(invent: InventDose) {
    if (invent)
      localStorage.setItem(this.keys.INVENT_KEY, JSON.stringify(invent));
  }
  get InventDose(): InventDose {
    return JSON.parse(localStorage.getItem(this.keys.INVENT_KEY));
  }
  removeItem() {
    localStorage.removeItem(this.keys.INVENT_KEY);
  }
  setInvetDetails(invent: InventDose, inventDetails: InventDetails[]) {
    if (!this.InventDose)
      this.InventDose = new InventDose();
    this.invent = this.InventDose;
    this.invent.inventDetails = inventDetails;
    this.InventDose = this.invent; // update localStorage
  }
  constructor(public httpClient: HttpClient) { }
  getVisiterById(idVisiter){
    return this.httpClient.get<Visiters>(`${this.URL}GetVisiterById/${idVisiter}`)
  }

  login(loginData): Observable<Visiters> {
    return this.httpClient.post<Visiters>(`${this.URL}login`, loginData);
  }
  SingIn(loginData): Observable<object> {
    return this.httpClient.get<object>(this.URL + 'SingeIn/' + loginData.username + '/' + loginData.password + '/');
  }
  signUp(newUser: SignUp): Observable<Visiters> {
    return this.httpClient.post<Visiters>(`${this.URL}SignUp`, newUser);
  }
  getOut(date) {
    console.log(this.CurrentUser.id)
    return this.httpClient.put<UserCalandar>(this.URLEm + 'SineOut/' + this.CurrentUser.id + '/', date);
  }
  ifSingIn() {
    // אם כבר היתה כניסה היום או לא
    if (localStorage.getItem('isManager') === 'true' ||
      localStorage.getItem('isEmployee') === 'true' || localStorage.getItem('isManager') === 'true') {
      this.singIn = true;
    }
    // שמירת שם משתמש כדי להציג את שמו למעלה 
    if (this.CurrentUser && this.CurrentUser?.hasOwnProperty('idEmployeeType')) {
      debugger;
      this.lastEnterDate= this.CurrentUser.lastDateEnter;
      this.userName = this.CurrentUser.firstName;
      
      debugger;
    } else {
      this.lastEnterDate= this.CurrentUser?.lastDateEnter;
      this.userName = this.CurrentUser?.firstName;
    }
  }
  getNumberMessege()
  {
    return this.httpClient.get<number>(this.URLEm + 'GetNumberMessege/' + this.CurrentUser.id + '/');
  }
  getAllMessege(): Observable<Array<ManagerMessege>>
  {
    return this.httpClient.get<Array<ManagerMessege>>(this.URLEm + 'GetAllMessege/' + this.CurrentUser.id + '/');
  }
  EditReadMessege(m)
  {
    return this.httpClient.put<ManagerMessege>(this.URLEm + 'EditReadMessege/' , m);
  }
}