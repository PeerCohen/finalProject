import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-menu',
  templateUrl: './display-menu.component.html',
  styleUrls: ['./display-menu.component.css']
})
export class DisplayMenuComponent implements OnInit {

  open: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  openDetalis() {
    this.open = true;
  }

}
