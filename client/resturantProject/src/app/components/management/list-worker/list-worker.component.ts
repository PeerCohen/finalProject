import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Employee } from 'src/app/shared/modals/employee';
import { ManagerService } from 'src/app/shared/services/manager.service';
import { EditWorkerDialogComponent } from '../edit-worker-dialog/edit-worker-dialog.component';

@Component({
  selector: 'app-list-worker',
  templateUrl: './list-worker.component.html',
  styleUrls: ['./list-worker.component.css']
})
export class ListWorkerComponent implements OnInit {

  listWorker: Employee[] = [];
  error: any;
  succeeded: any;
  isOpenNewAddWorkerForm:boolean=false;
  constructor(
    public managerService: ManagerService,
    public dialog: MatDialog,
    ) { }

  ngOnInit(): void {
    this.getWorker()
  }
  openNewAddWorkerForm(){
    this.isOpenNewAddWorkerForm=true;
  }
  getEmit(close:boolean){
    this.isOpenNewAddWorkerForm=close;
  }
  getWorker() {
    return this.managerService.getWorker().subscribe(
      (res: any) => {
        this.listWorker = res;
        console.log(this.listWorker);
        
      },
      (err) => {
        this.error = err;
      });
  }
  deleteWorker(worker: Employee) {
    return this.managerService.removeWorker(worker).subscribe(
      (res: any) => {
        this.succeeded = res;
      },
      (err) => {
        this.error = err;
      });
  }
  editWorker(worker) {
    this.dialog.open(EditWorkerDialogComponent, { data: worker });
  }
}
