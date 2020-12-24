import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-my-presence',
  templateUrl: './my-presence.component.html',
  styleUrls: ['./my-presence.component.css']
})
export class MyPresenceComponent implements OnInit {
  profile:any

  constructor(public ser:UserService) { }

  ngOnInit(): void {
    this.profile=this.ser.CurrentUser;
  }

}
