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
    public userService: UserService,
    private authService: AuthService,
  ) { }
  value = '';

  ngOnInit(): void {
    this.userService.singIn = this.userService.CurrentUser ? true : false;
    // אם כבר היתה כניסה היום או לא
    this.userService.ifSingIn();
  }
  openBottomSheetSignin() {
    this._bottomSheet.open(OpenBottomSheetSigninComponent);
  }
  openBottomSheetLogin() {
    this._bottomSheet.open(OpenBottomSheetLoginComponent);
  }
  isEmployee() {
    if (localStorage.getItem('isEmployee') === 'true')
      return true;
    return false;
  }
  getOut() {
    debugger
    this.userService.getOut(new Date()).subscribe(
      res => {
        let ans = res;
        console.log('יצאה בשעה');
        this.userService.singIn = true;
        this.userService.userName = '';
        localStorage.setItem('isManager', 'false');
        localStorage.setItem('isEmployee', 'false');
        localStorage.setItem('isVisiter', 'false');
        localStorage.clear();
        window.location.reload();
      }
    );
  }

}

