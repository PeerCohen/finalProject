import { Component, OnInit } from '@angular/core';
import { Comment } from 'src/app/shared/modals/comment';
import { ManagerService } from 'src/app/shared/services/manager.service';

@Component({
  selector: 'app-user-comment',
  templateUrl: './user-comment.component.html',
  styleUrls: ['./user-comment.component.css']
})
export class UserCommentComponent implements OnInit {
  list: Comment[]=[];

  constructor(public managerService:ManagerService) { }
  deleteCard(l:Comment){
    this.managerService.deleteUserComment(l).subscribe((res=>
      {
       this.getcomment();
        console.log(res)
      }))
  }
  ngOnInit(): void {
    this.getcomment();
  }
  getcomment(){
    this.managerService.getUserComment().subscribe((res=>
      {
        this.list=res;
        console.log(res)
      }))
  }

}
