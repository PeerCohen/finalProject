import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { InventDose } from '../modals/invent-dose';

@Injectable({
  providedIn: 'root'
})
export class EmployeeManagerService {
  URL:string="http://localhost:51437/api/InventDose";


  constructor(public http :HttpClient) { }
  getAllVisiterOrder():Observable<InventDose[]>{
  return this.http.get<InventDose[]>(`${this.URL}/GetAllInventDose`);
}
  getAllWaitingVisiterOrder():Observable<InventDose[]>{
    return this.http.get<InventDose[]>(`${this.URL}/GetAllWaitingInventDose`);
  }
  getAllPrepaerVisiterOrder(id):Observable<InventDose[]>{
    return this.http.get<InventDose[]>(`${this.URL}/GetAllPrepaerInventDose/${id}`);
  }

}
