import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Employee } from '../modals/employee';


@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  specialOrder = new Subject();
  subjectMenuManager:Subject<number>=new Subject();
  URL: string = "http://localhost:51437/api/Employees";
  
  constructor(private http: HttpClient) { }

  setSpecialOrder(specialOrderFrom) {
    this.specialOrder.next(specialOrderFrom)
    console.log(this.specialOrder);
  }
  addNewWorker(worker:Employee):Observable<Employee>{
    return this.http.post<Employee>(`${this.URL}/AddNewWorker/`,worker);
  }
  getWorker():Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.URL}/GetAllWorker`);
  }
  removeWorker(worker: Employee):Observable<Employee> {
    return this.http.post<Employee>(`${this.URL}/RemoveWorker/`,worker);
  }
}
