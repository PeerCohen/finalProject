import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Employee } from '../modals/employee';
import { ManagerMessege } from '../modals/ManagerMessege';
import { UserCalandar } from '../modals/UserCalandar';


@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  specialOrder = new Subject();
  subjectMenuManager:Subject<number>=new Subject();
  URL: string = "http://localhost:51437/api/Employees";
  EmloyeeToMesseg: ManagerMessege = new ManagerMessege();
  constructor(private http: HttpClient) { }

  setSpecialOrder(specialOrderFrom) {
    this.specialOrder.next(specialOrderFrom)
    console.log(this.specialOrder);
  }
  addNewWorker(worker:Employee):Observable<Employee>{
    return this.http.post<Employee>(`${this.URL}/AddNewWorker/`,worker);
    debugger;
  }
  getWorker():Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.URL}/GetAllWorker`);
  }
  getDailyWorker():Observable<UserCalandar[]>{
    return this.http.get<UserCalandar[]>(`${this.URL}/GetDailyWorker`);
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
