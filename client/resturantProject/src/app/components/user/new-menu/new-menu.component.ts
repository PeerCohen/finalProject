import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/shared/modals/menu';
import { MenuService } from 'src/app/shared/services/menu.service';

@Component({
  selector: 'app-new-menu',
  templateUrl: './new-menu.component.html',
  styleUrls: ['./new-menu.component.css']
})
export class NewMenuComponent implements OnInit {

  constructor(public menuService: MenuService) { }
newMenue: Menu[]= new Array();
  ngOnInit(): void {
 this.menuService.getANewMenu().subscribe(res=>{  console.log(res);
this.newMenue= res});
console.log(this.newMenue)
  }

}
