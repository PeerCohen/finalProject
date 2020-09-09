import { Component, OnInit, Inject } from '@angular/core';
import { VisitersOrderManagementService } from 'src/app/shared/services/visiters-order-management.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-remove-product',
  templateUrl: './remove-product.component.html',
  styleUrls: ['./remove-product.component.css']
})
export class RemoveProductComponent implements OnInit {

  id: number = 0;
  constructor(private visitersOrderManagementService: VisitersOrderManagementService,
    @Inject(MAT_DIALOG_DATA) public data: number) {
      this.id=data;
     }

  ngOnInit(): void {
  }

  removeProduct() {
    this.visitersOrderManagementService.removeProduct(this.id);
  }
}
