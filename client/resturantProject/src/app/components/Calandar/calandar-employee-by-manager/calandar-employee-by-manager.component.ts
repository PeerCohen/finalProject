import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { EmloyeeService } from 'src/app/shared/services/emloyee.service';
import { calanadar } from '../calandar-to-employee/calandar-to-employee.component';
import { CalandarToManager } from '../calandar-to-manager/calandar-to-manager.component';

@Component({
  selector: 'app-calandar-employee-by-manager',
  templateUrl: './calandar-employee-by-manager.component.html',
  styleUrls: ['./calandar-employee-by-manager.component.css']
})
export class CalandarEmployeeByManagerComponent implements OnInit {
  calandar: calanadar[] = new Array();
  listEvening: CalandarToManager[] = new Array();
  listMorning: CalandarToManager[] = new Array();
  LCalandarToManager: CalandarToManager[] = new Array();
  constructor(private emloyeeService: EmloyeeService) { }
  // קבלת התאריך של היום ראשון של השבוע הבא
  get_next_week_start() {
    var now = new Date();
    var next_week_start = new Date(now.getFullYear(), now.getMonth(), now.getDate()+(7 - now.getDay()));
    return next_week_start;
 }
 getMonday(d) {
  d = new Date(d);
  const day = d.getDay();
  const diff = d.getDate() - day ;
  return new Date(d.setDate(diff));
}
  ngOnInit(): void {
    this.emloyeeService.getEmloyeesCalandarByManaer(this.getMonday(new Date()), ).
    subscribe(res => {this.LCalandarToManager = res;
                      this.listEvening = this.LCalandarToManager.filter(e => e.shift === 'evening');
                      this.listMorning = this.LCalandarToManager.filter(e => e.shift === 'morning');
                      console.log(this.LCalandarToManager); });
    var date = this.get_next_week_start();
    //  מילוי 6 ימים בשבוע כולל התארכם שלהם
    // for (let i = 0; i < 5; i++) {
    //   var newCalandar = new calanadar();
    //   newCalandar.date = date;
    //   date = moment(date).add(1, 'days').toDate();
    //   newCalandar.shift = '';
    //   this.calandar.push(newCalandar);
    // }
    // console.log(this.calandar);
  }
}