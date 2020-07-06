import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(public httpClient:HttpClient) { }

  login(username,tz)
  {
    return this.httpClient.post("http://localhost:51437/api/Employees/login",{username:username,tz:tz});
  }
}
