import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/shared/services/menu.service';
import { CategoryService } from 'src/app/shared/services/category.service';



@Component({
  selector: 'app-menu-swiper',
  templateUrl: './menu-swiper.component.html',
  styleUrls: ['./menu-swiper.component.css', './swiper-bundle.min.css']
})
export class MenuSwiperComponent implements OnInit {
  URL_IMG: string = "../../assets/images/menu/"
  InputIdCategory: any;
  nameCategory: string
  menuDetailsByCategory: any;
  error: any;

  constructor(public menuService: MenuService, public categoryService: CategoryService) { }

  ngOnInit(): void {
    try {
      this.menuService.subjectMenu.subscribe((res: number) => {
        this.InputIdCategory = res;
        this.getNameCategory()
        this.getMenuDetails();
      })
    } catch (err) { console.log(err); }
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
  getNameCategory() {
    this.categoryService.getNameCategoryById(this.InputIdCategory).subscribe(
      (res: any) => {
        this.nameCategory = res.nameCategory;
        console.log(this.nameCategory)
      },
      (err) => {
        this.error = err;
      });
  }
  getImageByCategory() {
    console.log(this.URL_IMG + this.nameCategory + '.jpg');    
   return this.URL_IMG + this.nameCategory + '.jpg';
  }
  // }
  // ngAfterViewInit() {
  //   var swiper = new Swiper('.swiper-container', {
  //     slidesPerView: 1.2,
  //     loop: true,
  //     spaceBetween: 0,
  //     centeredSlides: true,
  //     autoplay: {
  //       delay: 7500,
  //       disableOnInteraction: false,
  //     },
  //     speed: 1000,
  //     pagination: {
  //       el: '.swiper-pagination',
  //       clickable: true,
  //     },
  //     navigation: {
  //       nextEl: '.swiper-button-next',
  //       prevEl: '.swiper-button-prev',
  //     }
  //   });

}
