import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogForHelpComponent } from '../in-resuarant/dialog-for-help/dialog-for-help.component';

@Component({
  selector: 'app-logo-head',
  templateUrl: './logo-head.component.html',
  styleUrls: ['./logo-head.component.css']
})
export class LogoHeadComponent implements OnInit {
  @Input() num: string;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  callHelp(){
      const dialogRef = this.dialog.open(DialogForHelpComponent)
  }
}
