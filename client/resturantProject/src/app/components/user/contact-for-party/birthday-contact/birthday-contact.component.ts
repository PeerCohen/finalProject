import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-birthday-contact',
  templateUrl: './birthday-contact.component.html',
  styleUrls: ['./birthday-contact.component.css']
})
export class BirthdayContactComponent implements OnInit {

  kind:string="ימי הולדת";
  constructor() { }

  ngOnInit(): void {
  }

}
