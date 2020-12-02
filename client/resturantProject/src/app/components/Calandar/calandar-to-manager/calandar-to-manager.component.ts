import { Component, OnInit } from '@angular/core';
import { EmloyeeService } from 'src/app/shared/services/emloyee.service';

@Component({
  selector: 'app-calandar-to-manager',
  templateUrl: './calandar-to-manager.component.html',
  styleUrls: ['./calandar-to-manager.component.css']
})
export class CalandarToManagerComponent implements OnInit {

  constructor(private emloyeeService: EmloyeeService) { }
  LCalandarToManager: CalandarToManager[] = new Array();
  listEvening: CalandarToManager[] = new Array();
  listMorning: CalandarToManager[] = new Array();
  ngOnInit(): void {
 this.getCalandr(new Date());
  }
  getCalandr(date)
  {
    this.emloyeeService.getEmloyeesCalandarToManger(this.getMonday(date)).
    subscribe(res => {this.LCalandarToManager = res;
                      this.listEvening = this.LCalandarToManager.filter(e => e.shift === 'evening');
                      this.listMorning = this.LCalandarToManager.filter(e => e.shift === 'morning');
                      console.log(this.LCalandarToManager); });
  }
   getMonday(d) {
    d = new Date(d);
    const day = d.getDay();
    const diff = d.getDate() - day ;
    return new Date(d.setDate(diff));
  }
 
  editShirt(i , calandarToManager ){
  console.log(i, calandarToManager);
  const idUser = calandarToManager.employeeID[i];
  this.emloyeeService.PutShiftToEmployee(idUser, calandarToManager.date).
    subscribe(res => {console.log(this.LCalandarToManager); this.getCalandr(calandarToManager.date)});
  }
  deleteShirt(){

  }
  finish(){
    
  }

}
export class CalandarToManager
{
    public  date: Date;
    public  shift: string;
    public  employeeID: number[];
    public  employeeName: string[];
}
