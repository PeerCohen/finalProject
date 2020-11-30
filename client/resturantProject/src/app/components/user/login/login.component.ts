import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Login } from 'src/app/shared/modals/login';
import { Visitor } from '@angular/compiler/src/i18n/i18n_ast';
import { Visiters } from 'src/app/shared/modals/visiters';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Employee } from 'src/app/shared/modals/employee';
import { AuthService } from 'src/app/Auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  hide = true;
  formGroupLogin: FormGroup;
  loginData: Login = new Login();

  constructor(private _bottomSheet: MatBottomSheet, public userService: UserService, public router: Router, private _formBuilder: FormBuilder,
    public AuthService: AuthService,
  ) { }

  ngOnInit(): void {
    this.formGroupLogin = this._formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.loginData.password = this.formGroupLogin.controls["password"].value;
    this.loginData.username = this.formGroupLogin.controls["username"].value;
  }


  login() {
    this._bottomSheet.dismiss();
    console.log(this.loginData);
    this.loginData.password = this.formGroupLogin.controls["password"].value;
    this.loginData.username = this.formGroupLogin.controls["username"].value;
    localStorage.clear();
    this.userService.SingIn(this.loginData).subscribe(async res => {
      const propaty = res;
      console.log(propaty)
      debugger
      // אם המשתמש הוא מסוג עובד
      if (propaty.hasOwnProperty('idEmployeeType')) {
        // אם המשתמש הואא מסוג מנהל
        if ((propaty as Employee).idEmployeeType === 1) {
          localStorage.setItem('isManager', 'true');
          this.router.navigate(['/managerHome']);
          this.AuthService.Employee = true;
          this.userService.CurrentUser = propaty;
          return;
        }
        // אם המשתמש הוא מסוג עובד 
        if ((propaty as Employee).idEmployeeType === 2) {
          this.AuthService.Employee = true;
          localStorage.setItem('isEmployee', 'true');
          this.router.navigate(['/workerHome']);
          this.userService.CurrentUser = propaty;
          return;
        }
        this.userService.CurrentUser = propaty;
        console.log('taht is  Employee');
      }
      // מאם המשתמש לא קיים במרכת
      if (res === null) {
        alert('משתמש זה אינו קיים במערכת נא בידקו אם אם שם משתמש או סיסמא תקינים ....');
      }
      // אם המשתמש או מסוג לקוח
      else {
        localStorage.setItem('isVisiter', 'true');
        this.userService.CurrentUser = propaty;
        this.router.navigate(['/home']);
      }
      console.log(this.userService.CurrentUser);
      this.userService.ifSingIn();
      window.location.reload();
    });
  }

}
