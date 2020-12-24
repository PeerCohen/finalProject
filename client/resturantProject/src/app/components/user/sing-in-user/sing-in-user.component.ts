import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { Router } from '@angular/router';
import { SignUp } from 'src/app/shared/modals/sign-up';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-sign-in-user',
  templateUrl: './sing-in-user.component.html',
  styleUrls: ['./sing-in-user.component.css']
})
export class SingInUserComponent implements OnInit {
  loginIsOpen=false;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;


  constructor(private _bottomSheet: MatBottomSheet,public dialog: MatDialog, public userService: UserService, public router: Router, private _formBuilder: FormBuilder) { }


  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstName: ['', Validators.required,Validators.minLength(2)],
      lastName: ['', Validators.required,Validators.minLength(2)]
    });
    this.secondFormGroup = this._formBuilder.group({
      mail: ['', [Validators.required, Validators.email]]
    });
    this.thirdFormGroup = this._formBuilder.group({
      username: ['', Validators.required,Validators.minLength(4)],
      password: ['', Validators.required]
    });
  }
  getErrorMessage() {
    if (this.secondFormGroup.controls.mail.hasError('required')) {
      return 'You must enter a value';
    }

    return this.secondFormGroup.controls.mail.hasError('email') ? 'Not a valid email' : '';
  }
  signUp() {
    this.userService.signUp({
      firstName: this.firstFormGroup.controls.firstName.value,
      lastName: this.firstFormGroup.controls.lastName.value,
      mail: this.secondFormGroup.controls.mail.value,
      nameUser: this.thirdFormGroup.controls.username.value,
      password: this.thirdFormGroup.controls.password.value
    }).subscribe(
      res => {
        localStorage.clear();
        this.userService.CurrentUser = res;
        if( res == null)
          alert("הנך משתמש רשום, אנא התחבר");
        else
          alert("נרשמת בהצלחה לאתר")
          window.location.reload();
      }
    )
    this._bottomSheet.dismiss()
  }
}
