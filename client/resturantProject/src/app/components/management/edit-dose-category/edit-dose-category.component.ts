import { Component, OnInit } from '@angular/core';
import { ManagerService } from 'src/app/shared/services/manager.service';
import { MenuService } from 'src/app/shared/services/menu.service';

@Component({
  selector: 'app-edit-dose-category',
  templateUrl: './edit-dose-category.component.html',
  styleUrls: ['./edit-dose-category.component.css']
})
export class EditDoseCategoryComponent implements OnInit {

  idCategory: number;
  menuCategoryList: any;
  isOpenAddDose:boolean=false;
  succeeded;
  error;
  
  constructor(public managerService: ManagerService,public menuService:MenuService) { }

  ngOnInit(): void {
    this.managerService.subjectMenuManager.subscribe((res: number) => {
      this.idCategory = res;
      this.getMenuCategoryListById();
    })
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
  deleteDose(Dose){
    return this.menuService.removeDose(Dose).subscribe(
      (res: any) => {
        this.succeeded = res;
      },
      (err) => {
        this.error = err;
      });
  }
  editDose(idDose){

  }
  AddDoseToCategory(){
    this.isOpenAddDose=true;
  }
}

