import { Component, OnInit, Input } from '@angular/core';
import { VisitersOrderManagementService } from 'src/app/shared/services/visiters-order-management.service';
import { Menu } from 'src/app/shared/modals/menu';
import { UserService } from 'src/app/shared/services/user.service';
import { MenuService } from 'src/app/shared/services/menu.service';
import { MatDialog } from '@angular/material/dialog';
import { RemoveProductComponent } from '../dialogs/remove-product/remove-product.component';
import { InventDetails } from 'src/app/shared/modals/invent-details';


@Component({
  selector: 'app-mini-cart',
  templateUrl: './mini-cart.component.html',
  styleUrls: ['./mini-cart.component.css']
})
export class MiniCartComponent implements OnInit {

 
  itemsInCart: InventDetails[];
  menuDetails: Menu[] = [];
  userName:string;


  constructor(
    private visitersOrderManagementService: VisitersOrderManagementService,
    private userService: UserService, private menu: MenuService,
    private dialog: MatDialog,
  ) { }

  
  ngOnInit(): void {
    this.visitersOrderManagementService.cart = this.userService.InventDose.inventDetails;
    this.itemsInCart = this.visitersOrderManagementService.fullCart;
   var currentUser= this.userService.CurrentUser;  
   this.userName= currentUser.firstName+ " " +currentUser.lastName ;

  }

  addProduct(itemId) {
    this.visitersOrderManagementService.plusProductAmount(itemId);
  }
  addInvent() {
    this.visitersOrderManagementService.addInvent().subscribe(res=>{
    })
  }
  lessProduct(itemId) {
  this.visitersOrderManagementService.MinusProductAmount(itemId);
  }
  openDialogRemove(itemId) {
    this.dialog.open(RemoveProductComponent, { data:  itemId});
  }

}
