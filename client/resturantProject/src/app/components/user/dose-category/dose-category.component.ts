import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/shared/modals/menu';
import { MenuService } from 'src/app/shared/services/menu.service';
import { CategoryService } from 'src/app/shared/services/category.service';
import { VisitersOrderManagementService } from 'src/app/shared/services/visiters-order-management.service';

@Component({
  selector: 'app-dose-category',
  templateUrl: './dose-category.component.html',
  styleUrls: ['./dose-category.component.css']
})
export class DoseCategoryComponent implements OnInit {

  InputIdCategory: number;
  nameCategory: string;
  error: any;
  menuDetailsByCategory: Menu[] = [];
  stars = [1, 2, 3, 4, 5];
  rating = 1;
  hoverState = 0;

  constructor(public menuService: MenuService,
    public categoryService: CategoryService,
    public visiterOrderManagment: VisitersOrderManagementService) { }

  ngOnInit(): void {
    this.menuService.subjectMenu.subscribe((res: number) => {
      this.InputIdCategory = res;
      this.getMenuDetails();
    })
    // this.nameCategory=this.categoryService.getNameCategoryById(this.InputIdCategory);

  }
  addToCart(item:Menu) {
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
        this.menuDetailsByCategory.forEach(element => {
        for (let index = 0; index < element.rateDose; index++) {
         element.rateArray.push(index);        
        }
        });
      },
      (err) => {
        this.error = err;
      });
  }
  onStarEnter(starId: number) {
    this.hoverState = starId
  }
  onStarLeave() {
    this.hoverState = 0;
  }
  onStarClicked(starId: number) {
    this.rating = starId;
  }

}
