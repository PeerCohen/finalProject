import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { VisitersOrderManagementService } from 'src/app/shared/services/visiters-order-management.service';

@Component({
  selector: 'app-dialog-rating',
  templateUrl: './dialog-rating.component.html',
  styleUrls: ['./dialog-rating.component.css']
})
export class DialogRatingComponent implements OnInit {

  idDose:number
  constructor(public visiterOrderService:VisitersOrderManagementService,
     @Inject(MAT_DIALOG_DATA) public data: any) { 
    this.idDose=data.id;
  }

  ngOnInit(): void {
  }
  addfeedback(o){
    this.visiterOrderService.addfeedbackForOrderDose(o," ").subscribe((res=>{
      console.log(res);
    }));

  }
}
