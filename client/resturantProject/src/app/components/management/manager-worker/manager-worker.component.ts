import { Component, OnInit } from '@angular/core';
import { ManagerService } from 'src/app/shared/services/manager.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-manager-worker',
  templateUrl: './manager-worker.component.html',
  styleUrls: ['./manager-worker.component.css']
})
export class ManagerWorkerComponent implements OnInit {
  listDailtWorker: any[]=[];
  today: number = Date.now();
  error: any;

  constructor(public managerService:ManagerService, 
    public userService: UserService) { }

  ngOnInit(): void {
    this.getDailyWorker();
  }
  getDailyWorker() {
     this.managerService.getDailyWorker().subscribe(
      (res: any) => {
        this.listDailtWorker = res;
        console.log(this.listDailtWorker);
        
      },
      (err) => {
        this.error = err;
      });

      return this.userService.getUserNameAndID().subscribe(
        (res: any) => {
          this.userService.userNameAndId = res;
          console.log( this.userService.userNameAndId);
          
        },
        (err) => {
          this.error = err;
        });
  }
  
}
