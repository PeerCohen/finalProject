import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  Employee = false;
  Visiters = false;
  Manager= false;
isEmployee(){
    return this.Employee;
}
isworker(){
    return this.Visiters;
}
isManager(){
  return this.Manager;
}
}
