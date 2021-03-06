import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { Employee } from 'src/app/shared/modals/employee';
import { ManagerService } from 'src/app/shared/services/manager.service';

@Component({
  selector: 'app-add-worker',
  templateUrl: './add-worker.component.html',
  styleUrls: ['./add-worker.component.css']
})
export class AddWorkerComponent implements OnInit {

  close: boolean = false;
  @Output() closeform = new EventEmitter();


  formGroupAddWorker: FormGroup;
  workerData: Employee=new Employee();
  succeeded: any;
  error: any;
  constructor(public managerService: ManagerService) { }

  ngOnInit(): void {

    this.formGroupAddWorker = new FormGroup({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      tz: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
    });
  }
  addWorker() {
    debugger;
    this.workerData.FirstName = this.formGroupAddWorker.controls.firstname.value;
    this.workerData.LastName = this.formGroupAddWorker.controls.lastname.value;
    this.workerData.Tz = this.formGroupAddWorker.controls.tz.value;
    this.workerData.Address = this.formGroupAddWorker.controls.address.value;
    this.workerData.Phone = this.formGroupAddWorker.controls.phone.value;
    debugger;
     this.managerService.addNewWorker(this.workerData).subscribe(
      (res: any) => {
        this.succeeded = res;
        this.managerService.subjectCustomer.next();
      },
      (err) => {
        this.error = err;
      });
  }
  closeformAddWorker() {
    this.closeform.emit(this.close);
  }
  @ViewChild("placesRef") placesRef : GooglePlaceDirective;
    
  public handleAddressChange(address: Address) {
  // Do some stuff
}
}
