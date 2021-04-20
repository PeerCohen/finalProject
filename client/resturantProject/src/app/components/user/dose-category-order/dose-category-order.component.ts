import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/shared/services/menu.service';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-dose-category-order',
  templateUrl: './dose-category-order.component.html',
  styleUrls: ['./dose-category-order.component.css']
})
export class DoseCategoryOrderComponent implements OnInit {

  InputIdCategory: any;
  menuDetailsByCategory: any;
  error: any;

  constructor(config: NgbRatingConfig,
     public menuService: MenuService,
      public router: Router) {
    config.max = 5;
  }

  ngOnInit(): void {
   console.log(this.menuService.subjectMenu)  
    this.menuService.subjectMenu.subscribe((res: number) => {
      this.InputIdCategory = res;
      console.log(this.InputIdCategory);
      this.getMenuDetails();
    })
  }

  getMenuDetails() {
    debugger;
    if(this.menuService.menuType==="new")
    {
      console.log(this.InputIdCategory);
      this.menuService.getMenuNewByCategory(this.InputIdCategory).subscribe(
        (res: any) => {
          this.menuDetailsByCategory = res;
          console.log(this.menuDetailsByCategory)
        },
        (err) => {
          this.error = err;
        });
    }
    if(this.menuService.menuType==="favorite"){
      this.menuService.getMenuFavoriteByCategory(this.InputIdCategory).subscribe(
        (res: any) => {
          this.menuDetailsByCategory = res;
          console.log(this.menuDetailsByCategory)
        },
        (err) => {
          this.error = err;
        });
    }
    else{
      this.menuService.getMenuByCategory(this.InputIdCategory).subscribe(
        (res: any) => {
          this.menuDetailsByCategory = res;
          console.log(this.menuDetailsByCategory)
        },
        (err) => {
          this.error = err;
        });
    }

  }

  goToOptionOrder() {
    // detach()
    this.router.navigateByUrl('#startOrder')
  }
}
