import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InRestaurantService } from 'src/app/shared/services/in-restaurant.service';
import { DialogForHelpComponent } from '../in-resuarant/dialog-for-help/dialog-for-help.component';

@Component({
  selector: 'app-logo-head',
  templateUrl: './logo-head.component.html',
  styleUrls: ['./logo-head.component.css']
})
export class LogoHeadComponent implements OnInit {
  @Input() num: string;
  constructor(public dialog: MatDialog,public inResturantService:InRestaurantService) { }

  ngOnInit(): void {
  }
  callHelp(){
    let m="קריאה משולחן "+this.num;
this.inResturantService.callWaiter(m).subscribe()
      const dialogRef = this.dialog.open(DialogForHelpComponent)
  }
}
