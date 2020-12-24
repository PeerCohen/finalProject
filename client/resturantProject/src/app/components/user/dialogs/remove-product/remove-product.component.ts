import { Component, OnInit, Inject } from '@angular/core';
import { VisitersOrderManagementService } from 'src/app/shared/services/visiters-order-management.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-remove-product',
  templateUrl: './remove-product.component.html',
  styleUrls: ['./remove-product.component.css']
})
export class RemoveProductComponent implements OnInit {

  id: number;
  index: number;
  itemsInCart: any[];
  constructor(private visitersOrderManagementService: VisitersOrderManagementService,
    @Inject(MAT_DIALOG_DATA) public data: { itemId: number, index: number, close: boolean }) {
    this.id = data.itemId;
    this.index = data.index;
  }

  ngOnInit(): void {
    this.itemsInCart = this.visitersOrderManagementService.fullCart;
  }

  MinusProductAmount() {

    this.itemsInCart.splice(this.index, 1);
    this.visitersOrderManagementService.removeProduct(this.id);    
    if (this.itemsInCart.length == 1)
    this.data.close = true;
  }
}
