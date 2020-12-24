import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shared/services/category.service';

@Component({
  selector: 'app-add-category-dialog',
  templateUrl: './add-category-dialog.component.html',
  styleUrls: ['./add-category-dialog.component.css']
})
export class AddCategoryDialogComponent implements OnInit {

  categoryName: string = '';
  Succeeded
  error

  constructor(public categoryService: CategoryService,) { }

  ngOnInit(): void { }

  addNewCategory() {
    this.categoryService.addNewCategory(this.categoryName).subscribe(
      (res: any) => {
        this.Succeeded = res;
      },
      (err) => {
        this.error = err;
      });;
  }

}

