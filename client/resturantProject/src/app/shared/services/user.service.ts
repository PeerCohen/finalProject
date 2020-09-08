import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignUp } from '../modals/sign-up';
import { Visiters } from '../modals/visiters';
import { Observable } from 'rxjs';
import { InventDose } from '../modals/invent-dose';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  keys = {
    USER_KEY: "currentUser",
    INVENT_KEY: "currentInvent"
  }

  URL: string = "http://localhost:51437/api/Visiters/";

   set CurrentUser(v: Visiters) {
     debugger;
    if (v)
      localStorage.setItem(this.keys.USER_KEY, JSON.stringify(v));
  }
   get CurrentUser(): Visiters {
    return JSON.parse(localStorage.getItem(this.keys.USER_KEY));
  }
   set InventDose(invent: InventDose) {
    if (invent)
      localStorage.setItem(this.keys.INVENT_KEY, JSON.stringify(invent));
  }
  get InventDose(): InventDose {
    return JSON.parse(localStorage.getItem(this.keys.INVENT_KEY));
  }

  constructor(public httpClient: HttpClient) { }

  login(loginData): Observable<Visiters> {
    return this.httpClient.post<Visiters>(`${this.URL}login`, loginData);
  }

  signUp(newUser: SignUp): Observable<Visiters> {
    debugger
    return this.httpClient.post<Visiters>(`${this.URL}SignUp`, newUser);
  }
}
