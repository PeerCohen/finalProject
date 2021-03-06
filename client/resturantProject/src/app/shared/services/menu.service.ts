import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Menu } from '../modals/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  subjectMenu:Subject<number>=new Subject();
  menuType="regular";
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
<<<<<<< HEAD
  getANewMenu():Observable<Array<Menu>>
  {
    return this.http.get<Array<Menu>>(`${this.URL}/GetANewMenu`);
  }
  
  getPopularBishes():Observable<Array<Menu>>
  {
    return this.http.get<Array<Menu>>(`${this.URL}/GetFavoriteMenu`);
  }
  getMenuNewByCategory(id:number):Observable<Menu[]> {
    return this.http.get<Menu[]>(`${this.URL}/GetMenuNewByCategory/${id}`);
  }
  getMenuFavoriteByCategory(id:number):Observable<Menu[]> {
    return this.http.get<Menu[]>(`${this.URL}/GetMenuFavoriteByCategory/${id}`);
  }
=======
>>>>>>> 42e6d94f93a542ec2a6216a0dc4a45a9132dee0c
}
