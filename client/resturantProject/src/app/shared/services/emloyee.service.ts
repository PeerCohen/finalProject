import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { calanadar } from 'src/app/components/Calandar/calandar-to-employee/calandar-to-employee.component';
import { CalandarToManager } from 'src/app/components/Calandar/calandar-to-manager/calandar-to-manager.component';
import { Emailc } from '../modals/Email';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class EmloyeeService {
  URL = 'http://localhost:51437/api/Employees/';
  constructor(private httpClient: HttpClient,
              private userService: UserService) { }
AddShiftToNextWeekEmployee(calandar) {
   return this.httpClient.post(this.URL + 'AddShiftToNextWeekEmployee/' + this.userService.CurrentUser.id + '/', calandar );
}
getEmloyeesCalandarToManger(date): Observable<Array<CalandarToManager>>  {
  return this.httpClient.put<Array<CalandarToManager>> (this.URL + 'GetEmloyeesCalandarToManger' , date );
}
getEmloyeesCalandarByManaer(date): Observable<Array<CalandarToManager>>  {
  console.log(date, this.userService.CurrentUser.id)
  return this.httpClient.put<Array<CalandarToManager>> (this.URL + 'GetEmloyeesCalandarByManaer/'+ this.userService.CurrentUser.id + '/', date );
}
PutShiftToEmployee( idUser: number, date: Date){
  console.log(new Date(date))
  return this.httpClient.post(this.URL + 'PutShiftToEmployee/' + idUser , moment(new Date(date)).add(1, 'days').toDate());
}
deleteEmployeeShirt(idUser: number, date: Date){
  console.log(new Date(date))
  return this.httpClient.post(this.URL + 'DeleteEmployeeShirt/' + idUser , moment(new Date(date)).add(1, 'days').toDate());
}
sendMail(e)
{
  return this.httpClient.post('http://localhost:51437/api/Email/send' , e);
}
}
