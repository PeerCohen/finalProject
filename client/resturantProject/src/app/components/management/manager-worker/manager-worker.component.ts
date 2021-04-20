import { Component, OnInit } from '@angular/core';
import { UserCalandar } from 'src/app/shared/modals/UserCalandar';
import { ManagerService } from 'src/app/shared/services/manager.service';

@Component({
  selector: 'app-manager-worker',
  templateUrl: './manager-worker.component.html',
  styleUrls: ['./manager-worker.component.css']
})
export class ManagerWorkerComponent implements OnInit {
  listDailtWorker: UserCalandar[] =new Array();
  today: number = Date.now();
  error: any;

  constructor(public managerService:ManagerService) { }

  ngOnInit(): void {
    this.getDailyWorker();
        console.log(this.listDailtWorker);

  }
  getDailyWorker() {
     this.managerService.getDailyWorker().subscribe(
      res=> {
        this.listDailtWorker = res;
        console.log(this.listDailtWorker);
      },
      // (err) => {
      //   this.error = err;
      // }
      );

  }
  
}
