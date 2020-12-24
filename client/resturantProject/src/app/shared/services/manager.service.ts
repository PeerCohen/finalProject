import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Employee } from '../modals/employee';
import { ManagerMessege } from '../modals/ManagerMessege';
import { SpecialInvent } from '../modals/special-invent';
import { UserCalandar } from '../modals/UserCalandar';


@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  subjectCustomer=new Subject();
  specialOrder = new Subject();
  subjectMenuManager:Subject<number>=new Subject();
  BASE_URL: string = "http://localhost:51437/api/";
  URL: string = "http://localhost:51437/api/Employees";
  EmloyeeToMesseg: ManagerMessege = new ManagerMessege();
  constructor(private http: HttpClient) { }

  setSpecialOrder(dataSpecialOrder,) {
    // this.specialOrder.next(specialOrderFrom)
    // console.log(this.specialOrder,kind);
    return this.http.post<SpecialInvent>(`${this.BASE_URL}SpecialInvent/AddSpecialInvent`,dataSpecialOrder);
  }
  addNewWorker(worker:Employee):Observable<Employee>{
    return this.http.post<Employee>(`${this.URL}/AddNewWorker/`,worker);
    debugger;
  }
  getWorker():Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.URL}/GetAllWorker`);
  }
  getDailyWorker():Observable<UserCalandar[]>{
    return this.http.get<UserCalandar[]>(`${this.URL}/GetACurrentDay`);
  }
  removeWorker(worker: Employee):Observable<Employee> {
    return this.http.post<Employee>(`${this.URL}/RemoveWorker/`,worker);
  }
  sendManagerMassegeToEmloyee():Observable<ManagerMessege>
  {
    console.log(this.EmloyeeToMesseg)
    return this.http.post<ManagerMessege>(`${this.URL}/SendManagerMassegeToEmloyee/`, this.EmloyeeToMesseg);

  }
}
