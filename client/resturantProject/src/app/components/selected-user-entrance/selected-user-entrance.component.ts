import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { AuthService } from 'src/app/Auth/auth.service';
import { UserService } from 'src/app/shared/services/user.service';
import { OpenBottomSheetLoginComponent } from '../user/open-bottom-sheet-login/open-bottom-sheet-login.component';
import { OpenBottomSheetSigninComponent } from '../user/open-bottom-sheet-signin/open-bottom-sheet-signin.component';


@Component({
  selector: 'app-selected-user-entrance',
  templateUrl: './selected-user-entrance.component.html',
  styleUrls: ['./selected-user-entrance.component.css']
})
export class SelectedUserEntranceComponent implements OnInit {

  constructor(private _bottomSheet: MatBottomSheet,
    private userService: UserService,
    private authService: AuthService,
  ) { }
  value = '';
  userName = '';
  singIn = false;

  ngOnInit(): void {
    // אם כבר היתה כניסה היום או לא
    if (localStorage.getItem('isManager') === 'true' ||
      localStorage.getItem('isEmployee') === 'true' || localStorage.getItem('isManager') === 'true') { 
        this.singIn = true;
      }
    // שמירת שם משתמש כדי להציג את שמו למעלה 
    if (this.userService.CurrentUser.hasOwnProperty('idEmployeeType')) {
      this.userName = this.userService.CurrentUser.firstName;
    } else {
      this.userName = this.userService.CurrentUser.firstName;
    }
  }
  openBottomSheetSignin() {
    this._bottomSheet.open(OpenBottomSheetSigninComponent);
  }
  openBottomSheetLogin() {
    this._bottomSheet.open(OpenBottomSheetLoginComponent);
  }
  getOut() {
    this.userService.getOut(new Date()).subscribe(
      res => {
        let ans = res;
        console.log('יצאה בשעה');
        this.singIn = true;
        this.userName = '';
        localStorage.setItem('isManager', 'false');
        localStorage.setItem('isEmployee', 'false');
        localStorage.setItem('isVisiter', 'false');
      }
    );
  }

}

