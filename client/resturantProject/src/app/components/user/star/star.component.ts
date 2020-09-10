import { Component, OnInit, Input, Output,EventEmitter} from '@angular/core';
import { Visiters } from 'src/app/shared/modals/visiters';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
@Input()starId;
@Input() rating1;

@Output() starEnter:EventEmitter<number> =new EventEmitter();
@Output() starLeave:EventEmitter<number> =new EventEmitter();
@Output() starClicked:EventEmitter<number> =new EventEmitter();
//   rating:{userId:number,foodId:number,rate:number};
  constructor() { }

  ngOnInit(): void {
    // var user:Visiters= JSON.parse(localStorage.getItem("user"));
    // this.rating.userId=user.id;
    // // user.id
  }
  onStarEnter(){
    this.starEnter.emit(this.starId);
  }
  onStarLeave(){
    this.starLeave.emit();
  }
  onStarClicked(){
    this.starClicked.emit(this.starId);
  }
}
