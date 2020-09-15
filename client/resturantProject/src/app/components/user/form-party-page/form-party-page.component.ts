import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-party-page',
  templateUrl: './form-party-page.component.html',
  styleUrls: ['./form-party-page.component.css']
})
export class FormPartyPageComponent implements OnInit {

  constructor() { }
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
    this.formGroupParty.controls["name"].value;
  }

}
