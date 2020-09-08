import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Menu } from '../modals/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  subjectMenu:Subject<number>=new Subject();
  url: string = "http://localhost:51437/api/Menu";

  constructor(private http: HttpClient) { }

  getAllMenuDetails():Observable<Menu> {
    return this.http.get<Menu>(`${this.url}/GetAllMenuDetails`);
  }
  getMenuByCategory(id:number):Observable<Menu[]> {
    return this.http.get<Menu[]>(`${this.url}/GetMenuByCategory/${id}`);
  }
  
}
