import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  username: string;
  tz: string;

  constructor(public employeeService: EmployeeService,
    public router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.employeeService.login(this.username, this.tz).subscribe(res => {
      if (res == null) {
        alert("טעות בנתונים")
      }
      else {
        this.router.navigate([""])
      }
    })
  }

}
