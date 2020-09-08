import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeesTypes } from '../modals/employees-types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesTypesService {
  url: string = "http://localhost:51437/api/EmployeesTypes/";

  constructor(private http: HttpClient) { }

  getAll():Observable<EmployeesTypes[]> {
    return this.http.get<EmployeesTypes[]>(this.url);//`${this.url}/sss`
  }
}
