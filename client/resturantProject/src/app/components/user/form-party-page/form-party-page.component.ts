import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-party-page',
  templateUrl: './form-party-page.component.html',
  styleUrls: ['./form-party-page.component.css']
})
export class FormPartyPageComponent implements OnInit {

  constructor() { }
  @Input() isEvent?:boolean=false;

  ngOnInit(): void {
    
  }

}
