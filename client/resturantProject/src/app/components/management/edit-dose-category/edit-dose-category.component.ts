import { Component, OnInit } from '@angular/core';
import { ManagerService } from 'src/app/shared/services/manager.service';
import { MenuService } from 'src/app/shared/services/menu.service';
import { MatDialog } from '@angular/material/dialog';
import { UpdateDoseDialogComponent } from '../update-dose-dialog/update-dose-dialog.component';
import { CategoryService } from 'src/app/shared/services/category.service';


@Component({
  selector: 'app-edit-dose-category',
  templateUrl: './edit-dose-category.component.html',
  styleUrls: ['./edit-dose-category.component.css']
})
export class EditDoseCategoryComponent implements OnInit {

  idCategory: number;
  nameCategory: string;
  menuCategoryList: any;
  isOpenAddDose: boolean = false;
  isOpen: boolean = false;
  succeeded;
  error;

  constructor(
    public managerService: ManagerService,
    public categoryService: CategoryService,
    public menuService: MenuService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.managerService.subjectMenuManager.subscribe((res: number) => {
      this.idCategory = res;
      this.getMenuCategoryListById();
      this.getCategoryName();
      this.isOpen = true
    })
  }
  getCategoryName() {
    return this.categoryService.getNameCategoryById(this.idCategory).subscribe(
      (res: any) => {
        this.nameCategory = res.nameCategory;
      },

      (err) => {
        this.error = err;
      });

  }
  getMenuCategoryListById() {
    return this.menuService.getMenuByCategory(this.idCategory).subscribe(
      (res: any) => {
        this.menuCategoryList = res;
      },
      (err) => {
        this.error = err;
      });
  }
  deleteDose(Dose) {
    return this.menuService.removeDose(Dose).subscribe(
      (res: any) => {
        this.succeeded = res;
      },
      (err) => {
        this.error = err;
      });
  }
  editDose(Dose) {
    debugger;
    this.dialog.open(UpdateDoseDialogComponent, { data: Dose });
  }
  AddDoseToCategory() {
    this.isOpenAddDose = true;
  }
}

