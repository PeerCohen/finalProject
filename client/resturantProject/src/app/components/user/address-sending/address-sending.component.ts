import { Component, OnInit, Output, ViewChild ,EventEmitter} from '@angular/core';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { VisitersOrderManagementService } from 'src/app/shared/services/visiters-order-management.service';

@Component({
  selector: 'app-address-sending',
  templateUrl: './address-sending.component.html',
  styleUrls: ['./address-sending.component.css']
})
export class AddressSendingComponent implements OnInit {

  address:string='';
  @Output() close = new EventEmitter();

  constructor(public visiter:VisitersOrderManagementService) {
    
   }


  ngOnInit(): void {
  }
  @ViewChild("placesRef") placesRef : GooglePlaceDirective;
    
  public handleAddressChange(address: Address) {
    this.close.emit(this.address);

  // Do some stuff
}
}
