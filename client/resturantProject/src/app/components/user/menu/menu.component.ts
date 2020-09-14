import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { MenuService } from 'src/app/shared/services/menu.service';
import { Menu } from 'src/app/shared/modals/menu';
import { Category } from 'src/app/shared/modals/category';
import { CategoryService } from 'src/app/shared/services/category.service';
import { Router } from '@angular/router';
import { VisitersOrderManagementService } from 'src/app/shared/services/visiters-order-management.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})


export class MenuComponent implements OnInit {

  @Input()isMiniCartOpen : boolean= false;

  constructor(private visitersOrderManagementService:VisitersOrderManagementService){

  }
  ngOnInit(): void {
   
  }
  cartIsEmpty(){
    console.log( this.visitersOrderManagementService.cartIsEmpty());
    return this.visitersOrderManagementService.cartIsEmpty();
  }

}
