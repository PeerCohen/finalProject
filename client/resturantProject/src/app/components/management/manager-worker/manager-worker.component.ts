import { Component, OnInit } from '@angular/core';
import { ManagerService } from 'src/app/shared/services/manager.service';

@Component({
  selector: 'app-manager-worker',
  templateUrl: './manager-worker.component.html',
  styleUrls: ['./manager-worker.component.css']
})
export class ManagerWorkerComponent implements OnInit {
  listDailtWorker: any[]=[];
  today: number = Date.now();
  error: any;

  constructor(public managerService:ManagerService) { }

  ngOnInit(): void {
    this.getDailyWorker();
  }
  getDailyWorker() {
    return this.managerService.getDailyWorker().subscribe(
      (res: any) => {
        this.listDailtWorker = res;
        console.log(this.listDailtWorker);
        
      },
      (err) => {
        this.error = err;
      });
  }
  
}
