import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ManagerService } from 'src/app/shared/services/manager.service';

@Component({
  selector: 'app-form-party-page',
  templateUrl: './form-party-page.component.html',
  styleUrls: ['./form-party-page.component.css']
})
export class FormPartyPageComponent implements OnInit {

  constructor(public managerService:ManagerService) { }
  @Input() isDateEvent: boolean = false;
  @Input() iscountOfPeople: boolean = false;

  
  formGroupParty: FormGroup;

  ngOnInit(): void {
    this.formGroupParty = new FormGroup({
      name: new FormControl(),
      phone: new FormControl(),
      mail: new FormControl(),
      dateEvent: new FormControl(),
      countOfPeople: new FormControl(),
    }
    )
  }
  onSubmit(customerData) {    
    this.formGroupParty.reset();
    this.managerService.setSpecialOrder(customerData);
    console.warn('Your order has been submitted', customerData);
  }

}
