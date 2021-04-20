import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/shared/modals/menu';
import { MenuService } from 'src/app/shared/services/menu.service';

@Component({
  selector: 'app-dishes-popular',
  templateUrl: './dishes-popular.component.html',
  styleUrls: ['./dishes-popular.component.css']
})
export class DishesPopularComponent implements OnInit {

  constructor(public menuService:MenuService) { }
  popularBishes : Menu[] = new Array();
  ngOnInit(): void {
    this.menuService.getPopularBishes().subscribe(res=> {console.log(res); 
      this.popularBishes=res;
    })
  }

}
