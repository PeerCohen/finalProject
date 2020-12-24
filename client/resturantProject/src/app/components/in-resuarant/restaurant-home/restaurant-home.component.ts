import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-home',
  templateUrl: './restaurant-home.component.html',
  styleUrls: ['./restaurant-home.component.css']
})
export class RestaurantHomeComponent implements OnInit {

  numTable:number;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  ClickNumTable(){
    localStorage.setItem('numTable',  JSON.stringify(this.numTable));
    this.router.navigate(['/in-restaurant-table']);
  }

}
