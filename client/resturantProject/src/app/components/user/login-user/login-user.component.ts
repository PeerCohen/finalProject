import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  loginC:LoginComponent;
  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }
  login() {
    let loginData = this.loginC.loginData
    debugger;
    console.log(this.loginC.loginData);
    localStorage.clear();
    this.userService.login(loginData).subscribe(res => {
      if (res == null) {
        alert("null")
      }
      else {
        this.userService.CurrentUser = res;
        alert("רשום במערכת")
      }
    })
  }
}