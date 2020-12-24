import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { MenuService } from 'src/app/shared/services/menu.service';
import { Menu } from 'src/app/shared/modals/menu';

@Component({
  selector: 'app-update-dose-dialog',
  templateUrl: './update-dose-dialog.component.html',
  styleUrls: ['./update-dose-dialog.component.css']
})
export class UpdateDoseDialogComponent implements OnInit {

  menu:Menu = {
    id: 0,
    price: 0,
    nameDose: "",
    rateDose: 0,
    description: "",
    category: 0,
    image: "",
    ImageBase64:"",
     amount:1,
     IsDelete:false,
     DateAdded:new Date(),
  }
  Succeeded: any;
  error: any;
  constructor(public menuService: MenuService,@Inject(MAT_DIALOG_DATA) public data: any) {
    this.menu.nameDose = data.nameDose;
    this.menu.price = data.price;
    this.menu.description = data.description;
    this.menu.id = data.id;
    this.menu.image = data.image;
    this.menu.rateDose = data.rateDose;
    this.menu.category = data.category;


  }
  ngOnInit(): void {
  }

  editDoseDetails(){
    this.menuService.updateDose(this.menu).subscribe(
      (res: any) => {
        this.Succeeded = res;
      },
      (err) => {
        this.error = err;
      });;
  }
}
