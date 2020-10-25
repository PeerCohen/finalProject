import { Component, OnInit, Input } from '@angular/core';
import { MenuService } from 'src/app/shared/services/menu.service';
import { Menu } from 'src/app/shared/modals/menu';
import { CategoryService } from 'src/app/shared/services/category.service';
import { Category } from 'src/app/shared/modals/category';



@Component({
  selector: 'app-menu-by-categoty',
  templateUrl: './menu-by-categoty.component.html',
  styleUrls: ['./menu-by-categoty.component.css']
})
export class MenuByCategotyComponent implements OnInit {


  constructor(public menuService: MenuService, public categoryService: CategoryService) { }
  categoryList: Category[] = [];
  categoryId: number;
  error;


  ngOnInit(): void {
    this.getCategoryList()
  }
  getMenuDetails(id: number) {
    this.categoryId = id;
    this.menuService.subjectMenu.next(this.categoryId);
  }
  getCategoryList() {
    return this.categoryService.getCategoryList().subscribe(
      (res: any) => {
        this.categoryList = res;
      },
      (err) => {
        this.error = err;
      });
  }
}
