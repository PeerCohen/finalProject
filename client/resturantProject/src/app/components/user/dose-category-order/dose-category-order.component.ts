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

  constructor(config: NgbRatingConfig, public menuService: MenuService, public router: Router) {
    config.max = 5;
  }

  ngOnInit(): void {
    this.menuService.subjectMenu.subscribe((res: number) => {
      this.InputIdCategory = res;
      this.getMenuDetails();
    })
  }

  getMenuDetails() {
    this.menuService.getMenuByCategory(this.InputIdCategory).subscribe(
      (res: any) => {
        this.menuDetailsByCategory = res;
        console.log(this.menuDetailsByCategory)
      },
      (err) => {
        this.error = err;
      });
  }

  goToOptionOrder() {
    this.router.navigateByUrl('/option-order')
  }
}
