import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Menu } from '../modals/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  subjectMenu:Subject<number>=new Subject();
  URL: string = "http://localhost:51437/api/Menu";

  constructor(private http: HttpClient) { }

  // getAllMenuDetails():Observable<Menu> {
  //   return this.http.get<Menu>(`${this.URL}/GetAllMenuDetails`);
  // }
  getRatingByCategory(id:number):Observable<Menu[]> {
    return this.http.get<Menu[]>(`${this.URL}/GetMenuByRating/${id}`);
  }
  getMenuById(id:number):Observable<Menu> {
    return this.http.get<Menu>(`${this.URL}/GetMenuById/${id}`);
  }
  getMenuByCategory(id:number):Observable<Menu[]> {
    return this.http.get<Menu[]>(`${this.URL}/GetMenuByCategory/${id}`);
  }
  removeDose(menu:Menu):Observable<any>{ 
    return this.http.post<any>(`${this.URL}/DeleteDoseOfMenu/`,menu);
  }
  updateDose(menu:Menu):Observable<any>{ 
    return this.http.post<any>(`${this.URL}/UpdateDoseOfMenu/`,menu);
  }
  addDose(menu:Menu):Observable<any>{ 
    debugger;
    return this.http.post<any>(`${this.URL}/AddDoseOfMenu/`,menu);
  }
}
