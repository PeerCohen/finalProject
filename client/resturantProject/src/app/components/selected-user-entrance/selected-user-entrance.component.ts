import { Component, Input, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import { AuthService } from 'src/app/Auth/auth.service';
import { UserService } from 'src/app/shared/services/user.service';
import { MessegeEmloyeeComponent } from '../management/messege-emloyee/messege-emloyee.component';
import { OpenBottomSheetLoginComponent } from '../user/open-bottom-sheet-login/open-bottom-sheet-login.component';
import { OpenBottomSheetSigninComponent } from '../user/open-bottom-sheet-signin/open-bottom-sheet-signin.component';


@Component({
  selector: 'app-selected-user-entrance',
  templateUrl: './selected-user-entrance.component.html',
  styleUrls: ['./selected-user-entrance.component.css']
})
export class SelectedUserEntranceComponent implements OnInit {
  worker: any;
  manager: any;
  degree: boolean = false;
  mySub: Subscription;
  constructor(private _bottomSheet: MatBottomSheet,
    public router: Router,
    public userService: UserService,
    private authService: AuthService,
  ) {              // זה הפונקציה המופעל באופן אוטומיתי כל שניה 
    this.mySub = interval(1000).subscribe((func => {
      this.getNumberMessege();
    }));
  }
  value = '';
  hidden = false;
  numNewMessege: number;
  ngOnInit(): void {
    if (localStorage.getItem('isEmployee') || localStorage.getItem('isManager'))
      this.degree = true;
    this.worker = localStorage.getItem('isEmployee');
    this.manager = localStorage.getItem('isManager');
    this.userService.singIn = this.userService.CurrentUser ? true : false;
    // אם כבר היתה כניסה היום או לא
    this.userService.ifSingIn();
  }
  // פונקציה שמקבלת את מס ההודעות שלא נקראו של המשתמש הנוכחי 
  getNumberMessege() {
    this.userService.getNumberMessege().subscribe(res => {
      this.numNewMessege = res;
    })
  }
  openBottomSheetSignin() {
    this._bottomSheet.open(OpenBottomSheetSigninComponent);
  }
  openBottomSheetLogin() {
    this._bottomSheet.open(OpenBottomSheetLoginComponent);
  }
  toggleBadgeVisibility() {
    this._bottomSheet.open(MessegeEmloyeeComponent);
  }
  getOut() {
    this.userService.getOut(new Date()).subscribe(
      res => {
        let ans = res;
        console.log('יציאה בשעה');
        console.log(this.userService.userName);
        console.log(this.userService.lastEnterDate);
        this.userService.singIn = true;
        this.userService.userName = '';
        localStorage.setItem('isManager', 'false');
        localStorage.setItem('isEmployee', 'false');
        if (localStorage.getItem('isVisiter')) {
          localStorage.setItem('isVisiter', 'false');
          window.location.reload();
        }
        localStorage.clear();
        this.router.navigate(['/home']);


      }
    );
  }

}

