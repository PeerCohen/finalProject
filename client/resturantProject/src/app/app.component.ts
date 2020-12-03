import { Component ,OnInit} from '@angular/core';
import { Emailc } from './shared/modals/Email';
import { EmployeesTypes } from './shared/modals/employees-types';
import { EmloyeeService } from './shared/services/emloyee.service';
import { EmployeesTypesService } from './shared/services/employees-types.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  implements OnInit{
  title = 'resturantProject';
  ccc: EmployeesTypes[] = [];
  email: Emailc = new Emailc();

  constructor(private ser: EmployeesTypesService , private ser2: EmloyeeService)
 {
    ser.getAll().subscribe(list => this.ccc = list);

  }
  ngOnInit(){
    this.email.Subject = "try";
    this.email.email = "shira4146152@gmail.com";
    this.email.Body = 'ההזמנה שלך בוצעה בהצלחה !!!';
    this.ser2.sendMail(this.email).subscribe(res => console.log('yayttt'));
  }
}
