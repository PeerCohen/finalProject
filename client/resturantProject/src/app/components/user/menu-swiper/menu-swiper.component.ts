import { Component, OnInit } from '@angular/core';
import { Swiper } from 'swiper/bundle';
import { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);


@Component({
  selector: 'app-menu-swiper',
  templateUrl: './menu-swiper.component.html',
  styleUrls: ['./menu-swiper.component.css', './swiper-bundle.min.css']
})
export class MenuSwiperComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1.2,
      loop: true,
      spaceBetween: 0,
      centeredSlides: true,
      autoplay: {
        delay: 7500,
        disableOnInteraction: false,
      },
      speed: 1000,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });
  }
}
