import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shared/services/category.service';

@Component({
  selector: 'app-add-category-dialog',
  templateUrl: './add-category-dialog.component.html',
  styleUrls: ['./add-category-dialog.component.css']
})
export class AddCategoryDialogComponent implements OnInit {

  categoryName: string = '';
  imageCategoy:string;
  ImageBase64: string;
  Succeeded
  error
  

  constructor(public categoryService: CategoryService,) { }

  ngOnInit(): void { }
  onFileChanged(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    this.imageCategoy = file.name;
    reader.addEventListener('load', (event: any) => {
    this.ImageBase64 = event.target.result;
    });
    reader.readAsDataURL(file);
  }
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

