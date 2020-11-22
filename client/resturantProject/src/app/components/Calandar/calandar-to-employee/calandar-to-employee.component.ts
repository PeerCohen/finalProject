import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { EmloyeeService } from 'src/app/shared/services/emloyee.service';


@Component({
  selector: 'app-calandar-to-employee',
  templateUrl: './calandar-to-employee.component.html',
  styleUrls: ['./calandar-to-employee.component.css']
})
export class CalandarToEmployeeComponent implements OnInit {
  calandar: calanadar[] = new Array();

  constructor(private emloyeeService: EmloyeeService) { }
  cangeShift(shift, index) {
    if (shift === 'eveningTrue') {
      this.calandar[index].shift = 'evening';
      console.log(this.calandar);
    }
    if (shift === 'morningTrue') {
      this.calandar[index].shift = 'morning';
      console.log(this.calandar);
    }
  }
  SendCalandar() {
    this.emloyeeService.AddShiftToNextWeekEmployee(this.calandar).
    subscribe(res => {console.log('!!!השינויים  נשמרו ')});
  }
  // קבלת התאריך של היום ראשון של השבוע הבא
   get_next_week_start() {
    var now = new Date();
    var next_week_start = new Date(now.getFullYear(), now.getMonth(), now.getDate()+(7 - now.getDay()));
    return next_week_start;
 }
  ngOnInit(): void {
    var date = this.get_next_week_start();
    //  מילוי 6 ימים בשבוע כולל התארכם שלהם
    for (let i = 0; i < 5; i++) {
      var newCalandar = new calanadar();
      newCalandar.date = date;
      date = moment(date).add(1, 'days').toDate();
      newCalandar.shift = '';
      this.calandar.push(newCalandar);
    }
    console.log(this.calandar);
  }
}
export class calanadar {
  date: Date;
  shift: string;
}