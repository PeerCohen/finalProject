import { Component, Input, OnInit } from '@angular/core';
import { Menu } from 'src/app/shared/modals/menu';
import { MenuService } from 'src/app/shared/services/menu.service';
import { CategoryService } from 'src/app/shared/services/category.service';
import { VisitersOrderManagementService } from 'src/app/shared/services/visiters-order-management.service';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { InRestaurantService } from 'src/app/shared/services/in-restaurant.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogForAddToCartComponent } from '../../in-resuarant/dialog-for-add-to-cart/dialog-for-add-to-cart.component';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-dose-category',
  templateUrl: './dose-category.component.html',
  styleUrls: ['./dose-category.component.css']
})
export class DoseCategoryComponent implements OnInit {

  @Input() Restaurant: boolean;
  isMiniCartOpen: boolean;
  InputIdCategory: number;
  nameCategory: string;
  error: any;
  menuDetailsByCategory: Menu[] = [];

  constructor(public menuService: MenuService,
    config: NgbRatingConfig,
    public categoryService: CategoryService,
    public visiterOrderManagment: VisitersOrderManagementService,
    public inRestaurant: InRestaurantService,
    public user:UserService,
    public dialog: MatDialog) {
    config.max = 5;
  }

  ngOnInit(): void {
    this.menuService.subjectMenu.subscribe((res: number) => {
      this.InputIdCategory = res;
      this.getMenuDetails();
    })
    // this.nameCategory=this.categoryService.getNameCategoryById(this.InputIdCategory);

  }
  checkChooseDose() {
    return false;
  }
  addToCart(item: Menu) {
    if (this.Restaurant) {
      this.inRestaurant.addToCartInRestaurant(item)
      const dialogRef = this.dialog.open(DialogForAddToCartComponent)
      
    }
    // this.isMiniCartOpen=true;
    else if (this.user.CurrentUser) {
      this.visiterOrderManagment.addOrderToCart(item)
      const dialogRef = this.dialog.open(DialogForAddToCartComponent)
      
    }
    else
      alert("אינך משתמש רשום")

  }
  getMenuDetails() {

    this.menuService.getMenuByCategory(this.InputIdCategory).subscribe(
      (res: any) => {
        this.menuDetailsByCategory = res;
        console.log(this.menuDetailsByCategory)
        // 
        // this.menuDetailsByCategory.forEach(element => {
        // for (let index = 0; index < element.rateDose; index++); 
        //  element.rateArray.push(index);        
        //  });
      },
      (err) => {
        this.error = err;
      });
  }

}
