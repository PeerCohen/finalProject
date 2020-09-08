import { Component } from '@angular/core';
import { EmployeesTypes } from './shared/modals/employees-types';
import { EmployeesTypesService } from './shared/services/employees-types.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'resturantProject';
  ccc: EmployeesTypes[] = [];

  constructor(private ser: EmployeesTypesService) {
    ser.getAll().subscribe(list => this.ccc = list);
  }
}
