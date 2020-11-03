import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  specialOrder = new Subject();
  subjectMenuManager:Subject<number>=new Subject();
  
  constructor(private http: HttpClient) { }

  setSpecialOrder(specialOrderFrom) {
    this.specialOrder.next(specialOrderFrom)
    console.log(this.specialOrder);
  }
}
