import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Category } from 'src/app/shared/modals/category';
import { CategoryService } from 'src/app/shared/services/category.service';
import { CategoryManagementComponent } from '../category-management/category-management.component';


@Component({
  selector: 'app-delete-category-dialog',
  templateUrl: './delete-category-dialog.component.html',
  styleUrls: ['./delete-category-dialog.component.css']
})
export class DeleteCategoryDialogComponent implements OnInit {

  error: any;
  Succeeded: any;
  dataCategory: Category;
  constructor(public categoryService: CategoryService,
     @Inject(MAT_DIALOG_DATA) public data: any) { 
      this.dataCategory=data
     }

  ngOnInit(): void {
    console.log(this.data)
  }

  deleteCategory() {
    this.categoryService.deleteCategory(this.data).subscribe(
      (res: any) => {
        this.Succeeded = res;
      },
      (err) => {
        this.error = err;
      });;
  }
}