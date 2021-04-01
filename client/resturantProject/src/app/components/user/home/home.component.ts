import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit {
  loginUser:boolean=false;

  constructor(public userService:UserService) { }

  ngOnInit(): void {
    // if(this.userService.CurrentUser)
    // this.loginUser=false;
  }

}
