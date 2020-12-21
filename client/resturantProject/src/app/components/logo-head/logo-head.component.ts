import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo-head',
  templateUrl: './logo-head.component.html',
  styleUrls: ['./logo-head.component.css']
})
export class LogoHeadComponent implements OnInit {
  @Input() num: string;
  constructor() { }

  ngOnInit(): void {
  }

}
