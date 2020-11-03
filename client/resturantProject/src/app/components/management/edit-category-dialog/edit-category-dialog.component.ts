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

  category={
    Id:0, 
    nameCategory:"",
  }
  idCategory:number;
  Succeeded:any;
  error:any;
  constructor(public categoryService: CategoryService,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
      this.category.nameCategory=data.nameCategory;
      this.category.Id=data.id;
    }

  ngOnInit(): void {   
  }

  editCategory() {
    this.categoryService.editCategory(this.category).subscribe(
      (res: any) => {
        this.Succeeded = res;
      },
      (err) => {
        this.error = err;
      });;
  }
}