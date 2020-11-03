import { Injectable } from '@angular/core';
import { Category } from '../modals/category';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
 
  URL: string = "http://localhost:51437/api/Category";
  category={
    Id:"", 
    nameCategory:"",
  }

  constructor(private http: HttpClient) { }
  getNameCategoryById(id:number){
    return this.http.get(`${this.URL}/GetCategoryName/${id}`)
  }

  getCategoryList():Observable<Category[]> {
    return this.http.get<Category[]>(`${this.URL}/GetAllCategoryList`);
  }

  addNewCategory(categoryName):Observable<Category>{
    this.category.nameCategory=categoryName
    return this.http.post<Category>(`${this.URL}/AddCategory`,this.category);
  }
  deleteCategory(data):Observable<Category>{
    return this.http.post<Category>(`${this.URL}/DeleteCategory`,data);
  }
  editCategory(data):Observable<Category>{
    return this.http.post<Category>(`${this.URL}/UpdateCategory`,data);
  }
  
}
