import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/shared/services/menu.service';

@Component({
  selector: 'app-display-menu',
  templateUrl: './display-menu.component.html',
  styleUrls: ['./display-menu.component.css']
})
export class DisplayMenuComponent implements OnInit {

  open: boolean = false;
  constructor(public menuService:MenuService) { }

  ngOnInit(): void {
  }
  openDetalis() {
    this.open = true;
  }

}
