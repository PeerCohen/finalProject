import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/shared/modals/category';
import { FavoriteDose } from 'src/app/shared/modals/favorite-dose';
import { Menu } from 'src/app/shared/modals/menu';
import { CategoryService } from 'src/app/shared/services/category.service';
import { MenuService } from 'src/app/shared/services/menu.service';
import { VisitersOrderManagementService } from 'src/app/shared/services/visiters-order-management.service';

@Component({
  selector: 'app-favorite-dose',
  templateUrl: './favorite-dose.component.html',
  styleUrls: ['./favorite-dose.component.css']
})
export class FavoriteDoseComponent implements OnInit {
  listBestDose: FavoriteDose;
  //   categoryList: any;
  //   error: any;
  //   doseRatingList: any;

  //   constructor(public categoryService: CategoryService, public menuService: MenuService) { }

  //   ngOnInit(): void {
  //     this.getCategoryList();
  //   }
  //   getCategoryList() {
  //     return this.categoryService.getCategoryList().subscribe(
  //       (res: any) => {
  //         this.categoryList = res;
  //         console.log(this.categoryList);

  //       },
  //       (err) => {
  //         this.error = err;
  //       });
  //   }
  //   getRating(idCategory) {
  //     this.menuService.getRatingByCategory(idCategory).subscribe(
  //       (res: any) => {
  //         this.doseRatingList = res;
  //         console.log(this.doseRatingList);

  //       },
  //       (err) => {
  //         this.error = err;
  //       });
  //   }
  // }
  constructor(public menuService: MenuService, public categoryService: CategoryService,public visiterOrderservice:VisitersOrderManagementService) { }
  categoryList: Category[] = [];
  categoryId: number;
  error;

  newMenue: Menu[] = new Array();
  open = false;
  ngOnInit(): void {
this.visiterOrderservice.getfeedbackForOrderDose().subscribe((res=>{
  this.listBestDose=res;
  console.log(res)
}));
    this.getCategoryList();
  }
  openDetalis() {
    this.open = true;
  }
  getMenuDetails(id: number) {
    this.categoryId = id;
    this.menuService.subjectMenu.next(this.categoryId);
    this.menuService.menuType = "favorite";
  }
  getCategoryList() {
    return this.categoryService.getfaveriteCategoryList().subscribe(
      (res: any) => {
        this.categoryList = res;
      },
      (err) => {
        this.error = err;
      });
  }
}
