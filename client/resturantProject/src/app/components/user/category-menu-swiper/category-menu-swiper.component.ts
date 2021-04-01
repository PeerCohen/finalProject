import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper/bundle';
import SwiperCore, { EffectFade } from 'swiper';

SwiperCore.use([EffectFade]);

@Component({
  selector: 'app-category-menu-swiper',
  templateUrl: './category-menu-swiper.component.html',
  styleUrls: ['./category-menu-swiper.component.css']
})
export class CategoryMenuSwiperComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { 
    var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  }
 
}
