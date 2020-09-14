import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/shared/modals/menu';
import { MenuService } from 'src/app/shared/services/menu.service';
import { CategoryService } from 'src/app/shared/services/category.service';
import { VisitersOrderManagementService } from 'src/app/shared/services/visiters-order-management.service';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dose-category',
  templateUrl: './dose-category.component.html',
  styleUrls: ['./dose-category.component.css']
})
export class DoseCategoryComponent implements OnInit {

  isMiniCartOpen:boolean;
  InputIdCategory: number;
  nameCategory: string;
  error: any;
  menuDetailsByCategory: Menu[] = [];

  constructor(public menuService: MenuService,
    config: NgbRatingConfig,
    public categoryService: CategoryService,
    public visiterOrderManagment: VisitersOrderManagementService) {
      config.max = 5;
      config.readonly = true;
     }

  ngOnInit(): void {
    this.menuService.subjectMenu.subscribe((res: number) => {
      this.InputIdCategory = res;
      this.getMenuDetails();
    })
    // this.nameCategory=this.categoryService.getNameCategoryById(this.InputIdCategory);

  }
  addToCart(item:Menu) {
    // debugger;
    // this.isMiniCartOpen=true;
   if(this.visiterOrderManagment.addOrderToCart(item)){
     alert("הוסף מוצר בהצלחה")
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
