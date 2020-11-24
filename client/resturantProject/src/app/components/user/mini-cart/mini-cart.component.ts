import { Component, OnInit, Input } from '@angular/core';
import { VisitersOrderManagementService } from 'src/app/shared/services/visiters-order-management.service';
import { Menu } from 'src/app/shared/modals/menu';
import { UserService } from 'src/app/shared/services/user.service';
import { MenuService } from 'src/app/shared/services/menu.service';
import { MatDialog } from '@angular/material/dialog';
import { RemoveProductComponent } from '../dialogs/remove-product/remove-product.component';
import { InventDetails } from 'src/app/shared/modals/invent-details';
import { Router } from '@angular/router';


@Component({
  selector: 'app-mini-cart',
  templateUrl: './mini-cart.component.html',
  styleUrls: ['./mini-cart.component.css']
})
export class MiniCartComponent implements OnInit {


  itemsInCart: InventDetails[];
  menuDetails: Menu[] = [];
  userName: string;
  disableInvent: boolean = false;
  closeCart: any;


  constructor(
    private visitersOrderManagementService: VisitersOrderManagementService,
    private userService: UserService, private menu: MenuService,
    private dialog: MatDialog,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.visitersOrderManagementService.cart = this.userService.InventDose.inventDetails;
    this.itemsInCart = this.visitersOrderManagementService.fullCart;
    var currentUser = this.userService.CurrentUser;
    this.userName = currentUser.firstName + " " + currentUser.lastName;

  }

  addProduct(item) {
    item.amount++;
    this.visitersOrderManagementService.plusProductAmount(item.idMenu);
  }
  addInvent() {
    this.visitersOrderManagementService.addInvent().subscribe(res => {
    })
    this.router.navigate(['/payment']);
  }
  lessProduct(item) {
    if (item.amount > 1)
      item.amount--;
    this.visitersOrderManagementService.MinusProductAmount(item.idMenu);
  }
  openDialogRemove(itemId, index) {
    console.log(this.itemsInCart.length)
    var dialog = this.dialog.open(RemoveProductComponent, { data: { itemId, index, close: this.closeCart } });
    dialog.afterClosed().subscribe(result => {
      this.closeCart = result;
      if (this.itemsInCart.length == 0)
        this.disableInvent = true;
      console.log(this.closeCart);
      console.log(this.itemsInCart.length)

    });
  }

}
