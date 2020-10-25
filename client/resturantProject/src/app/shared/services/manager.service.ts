import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  specialOrder = [];
  subjectMenuManager:Subject<number>=new Subject();
  
  constructor(private http: HttpClient) { }

  setSpecialOrder(specialOrderFrom) {
    this.specialOrder.push(specialOrderFrom)
    console.log(this.specialOrder);
  }
}
