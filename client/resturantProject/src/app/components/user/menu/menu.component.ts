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

  @Input() IsInRestaurant: boolean=false;
  @Input() option: string;
  @Input() isMiniCartOpen: boolean = false;
  optionDetails: string;
  InRestaurant:boolean;


  constructor(private visitersOrderManagementService: VisitersOrderManagementService) {
  this.InRestaurant=this.IsInRestaurant
  }
  ngOnInit(): void {

    if (this.option == "איסוף מהסניף") {
      this.optionDetails = "זמן הגעה עד כ: 105 דקות";
      this.visitersOrderManagementService.idStatusInvent=3;
    }
    else if (this.option == "משלוח") {
      this.optionDetails = "זמן הכנה עד כ: 30 דקות";
      this.visitersOrderManagementService.idStatusInvent=2;

    }
    else 
      this.optionDetails = " ";
      this.visitersOrderManagementService.idStatusInvent=1;

  }
  cartIsEmpty() {
    return this.visitersOrderManagementService.cartIsEmpty();
  }

}
