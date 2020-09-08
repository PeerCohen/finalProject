import { Injectable } from '@angular/core';
import { Category } from '../modals/category';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
 
  url: string = "http://localhost:51437/api/Category";

  constructor(private http: HttpClient) { }
  getNameCategoryById(id:number){
    return this.http.get(`${this.url}/GetCategoryName`)
  }

  getCategoryList():Observable<Category[]> {
    return this.http.get<Category[]>(`${this.url}/GetAllCategoryList`);
  }
}
