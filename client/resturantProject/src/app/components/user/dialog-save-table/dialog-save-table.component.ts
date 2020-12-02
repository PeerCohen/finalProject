import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-dialog-save-table',
  templateUrl: './dialog-save-table.component.html',
  styleUrls: ['./dialog-save-table.component.css']
})
export class DialogSaveTableComponent implements OnInit {
  name: any;

  constructor(public userService:UserService) { }

  ngOnInit(): void {
    this.name=this.userService.userName;
  }

}
