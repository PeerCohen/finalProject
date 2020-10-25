import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoryService } from 'src/app/shared/services/category.service';

@Component({
  selector: 'app-edit-category-dialog',
  templateUrl: './edit-category-dialog.component.html',
  styleUrls: ['./edit-category-dialog.component.css']
})
export class EditCategoryDialogComponent implements OnInit {

  categoryName: string = '';
  Succeeded:any;
  error:any;
  constructor(public categoryService: CategoryService,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
      this.categoryName=data;
    }

  ngOnInit(): void {   
  }

  editCategory() {
    this.categoryService.editCategory(this.categoryName).subscribe(
      (res: any) => {
        this.Succeeded = res;
      },
      (err) => {
        this.error = err;
      });;
  }
}