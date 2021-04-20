// import { Component, OnInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { VisitersOrderManagementService } from 'src/app/shared/services/visiters-order-management.service';
import { UserService } from 'src/app/shared/services/user.service';
import { InventDetails } from 'src/app/shared/modals/invent-details';
import { InventDose } from 'src/app/shared/modals/invent-dose';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog } from '@angular/material/dialog';
import { DialogRatingComponent } from '../dialog-rating/dialog-rating.component';
import { Comment } from 'src/app/shared/modals/comment';

@Component({
  selector: 'app-previous-orders',
  templateUrl: './previous-orders.component.html',
  styleUrls: ['./previous-orders.component.css']
})
export class PreviousOrdersComponent implements OnInit {
  currentRate: number;
  preOrders: InventDose[] = [];
  commentContent: string;
  comment: Comment=new Comment();
  value:number = 0;
  
  constructor(private visitersOrderManagementService: VisitersOrderManagementService,
    public userService: UserService,config: NgbRatingConfig,
    public dialog:MatDialog
    ) {
      config.max = 5;
     }
  currentUser = JSON.parse(localStorage.getItem("currentUser"))?.id;

  ngOnInit(): void {
    if (this.currentUser) {
      this.visitersOrderManagementService.getAllOrder(this.currentUser).subscribe(res => {
        console.log(res);
        this.preOrders = res;
      })
    }
  }
  saveRating(o:InventDose,num:number){
    o.currentRate=num;
    this.visitersOrderManagementService.rating(o).subscribe(res => {
      console.log(res);
    })
  }
  addFeedback(o:InventDose){
    const dialogRef = this.dialog.open(DialogRatingComponent ,{ data: o });

  }
  sendComment() {
this.comment.comment=this.commentContent;
this.comment.mark= Math.round(this.value / 1000);;
this.comment.name=this.userService.CurrentUser.firstName+this.userService.CurrentUser.lastName;
    this.visitersOrderManagementService.addComment(this.comment).subscribe(res => {
      console.log(res);
    })
  }
  formatLabel(value: number) {
    if (value >= 1000) {            
       return Math.round(value / 1000) + '%';

    }
    return value;
  }
}
