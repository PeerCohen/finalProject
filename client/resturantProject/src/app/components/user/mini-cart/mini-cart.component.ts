import { Component, OnInit } from '@angular/core';
import { VisitersOrderManagementService } from 'src/app/shared/services/visiters-order-management.service';
import { Menu } from 'src/app/shared/modals/menu';
import { UserService } from 'src/app/shared/services/user.service';
import { MenuService } from 'src/app/shared/services/menu.service';
import {MatDialog} from '@angular/material/dialog';
import { RemoveProductComponent } from '../dialogs/remove-product/remove-product.component';


@Component({
  selector: 'app-mini-cart',
  templateUrl: './mini-cart.component.html',
  styleUrls: ['./mini-cart.component.css']
})
export class MiniCartComponent implements OnInit {

  cart: any[];
  menuDetails: Menu[] = [];
  constructor(
    private visitersOrderManagementService: VisitersOrderManagementService,
    private userService: UserService, private menu: MenuService,
    private dialog: MatDialog
    ) { } 

  ngOnInit(): void {

    this.visitersOrderManagementService.subjectCart.subscribe(res=>{
      this.menu.getAllMenuDetails().subscribe(
        (res: any) => {
          this.menuDetails = res;
          
          this.cart = this.userService.InventDose.inventDetails.map(id => {
            let m=this.menuDetails.find(item => item.id == id.idMenu)
            return {
              idDose: id.idDose,
              menu: m.nameDose + '\n' +m.price +' ₪ ',           
              amount: id.amount,
             
            }
          }
          );
        });
    })

    // this.menu.getAllMenuDetails().subscribe(
    //   (res: any) => {
    //     this.menuDetails = res;
        
    //     this.cart = this.userService.InventDose.inventDetails.map(id => {
    //       let m=this.menuDetails.find(item => item.id == id.idMenu)
    //       return {
    //         idDose: id.idDose,
    //         menu: m.nameDose + '\n' +m.price +' ₪ ',           
    //         amount: id.amount,
           
    //       }
    //     }
    //     );
    //   });
  }
  addProduct(item:Menu){
    this.visitersOrderManagementService.addOrderToCart(item);
  }
      addInvent(){
        debugger;
        this.visitersOrderManagementService.addInvent()
      }
      openDialogRemove(id){
        this.dialog.open(RemoveProductComponent,{data:id});
      }

}
