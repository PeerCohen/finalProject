import { Component, OnInit } from '@angular/core';
import {MatBottomSheet} from '@angular/material/bottom-sheet';
import { OpenBottomSheetLoginComponent } from '../user/open-bottom-sheet-login/open-bottom-sheet-login.component';
import { OpenBottomSheetSigninComponent } from '../user/open-bottom-sheet-signin/open-bottom-sheet-signin.component';


@Component({
  selector: 'app-selected-user-entrance',
  templateUrl: './selected-user-entrance.component.html',
  styleUrls: ['./selected-user-entrance.component.css']
})
export class SelectedUserEntranceComponent implements OnInit {

  constructor(private _bottomSheet: MatBottomSheet) { }
  value = '';

  ngOnInit(): void {
  }
  openBottomSheetSignin(){
    this._bottomSheet.open(OpenBottomSheetSigninComponent);
  }
  openBottomSheetLogin(){
    this._bottomSheet.open(OpenBottomSheetLoginComponent);
  }

}
