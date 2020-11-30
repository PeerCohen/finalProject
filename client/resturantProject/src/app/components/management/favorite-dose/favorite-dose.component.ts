import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shared/services/category.service';
import { MenuService } from 'src/app/shared/services/menu.service';

@Component({
  selector: 'app-favorite-dose',
  templateUrl: './favorite-dose.component.html',
  styleUrls: ['./favorite-dose.component.css']
})
export class FavoriteDoseComponent implements OnInit {
  categoryList: any;
  error: any;
  doseRatingList: any;

  constructor(public categoryService: CategoryService, public menuService: MenuService) { }

  ngOnInit(): void {
    this.getCategoryList();
  }
  getCategoryList() {
    return this.categoryService.getCategoryList().subscribe(
      (res: any) => {
        this.categoryList = res;
        console.log(this.categoryList);

      },
      (err) => {
        this.error = err;
      });
  }
  getRating(idCategory) {
    this.menuService.getRatingByCategory(idCategory).subscribe(
      (res: any) => {
        this.doseRatingList = res;
        console.log(this.doseRatingList);

      },
      (err) => {
        this.error = err;
      });
  }
}
