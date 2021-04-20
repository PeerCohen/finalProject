import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/shared/modals/category';
import { Menu } from 'src/app/shared/modals/menu';
import { CategoryService } from 'src/app/shared/services/category.service';
import { MenuService } from 'src/app/shared/services/menu.service';

@Component({
  selector: 'app-new-menu',
  templateUrl: './new-menu.component.html',
  styleUrls: ['./new-menu.component.css']
})
export class NewMenuComponent implements OnInit {

  constructor(public menuService: MenuService, public categoryService: CategoryService) { }
  categoryList: Category[] = [];
  categoryId: number;
  error;

newMenue: Menu[]= new Array();
open = false;
  ngOnInit(): void {
//  this.menuService.getANewMenu().subscribe(res=>{  console.log(res);
//   debugger;
// this.newMenue= res});
console.log(this.newMenue)
this.getCategoryList();
  }
  openDetalis() {
    this.open = true;
  }
  getMenuDetails(id: number) {
    this.categoryId = id;
    this.menuService.subjectMenu.next(this.categoryId);
    this.menuService.menuType= "new";
  }
  getCategoryList() {
    return this.categoryService.getNewCategoryList().subscribe(
      (res: any) => {
        this.categoryList = res;
      },
      (err) => {
        this.error = err;
      });
  }
}
