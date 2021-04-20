import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { EventEmitter } from 'events';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Address } from 'ngx-google-places-autocomplete/objects/address';

@Component({
  selector: 'app-address-sending',
  templateUrl: './address-sending.component.html',
  styleUrls: ['./address-sending.component.css']
})
export class AddressSendingComponent implements OnInit {

  address:string='';
  @Output() close = new EventEmitter();

  constructor() {
    
   }


  ngOnInit(): void {
  }
  @ViewChild("placesRef") placesRef : GooglePlaceDirective;
    
  public handleAddressChange(address: Address) {
    this.close.emit(this.address);

  // Do some stuff
}
}
