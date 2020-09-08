import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { MenuService } from 'src/app/shared/services/menu.service';
import { Menu } from 'src/app/shared/modals/menu';
import { Category } from 'src/app/shared/modals/category';
import { CategoryService } from 'src/app/shared/services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  ngOnInit(): void {
   
  }


}
