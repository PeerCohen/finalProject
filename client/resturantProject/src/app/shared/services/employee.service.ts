import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(public httpClient:HttpClient) { }
url="http://localhost:51437/api/Employees";
  login(firstName,tz)
  {
    
    return this.httpClient.get(`${this.url}/login/${firstName+tz}`);
  }
}
