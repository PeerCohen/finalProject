import { Component, OnInit, ViewChild } from '@angular/core';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Address } from 'ngx-google-places-autocomplete/objects/address';

@Component({
  selector: 'app-address-sending',
  templateUrl: './address-sending.component.html',
  styleUrls: ['./address-sending.component.css']
})
export class AddressSendingComponent implements OnInit {

  
  constructor() {
    
   }

  ngOnInit(): void {
  }
  @ViewChild("placesRef") placesRef : GooglePlaceDirective;
    
  public handleAddressChange(address: Address) {
  // Do some stuff
}
}
