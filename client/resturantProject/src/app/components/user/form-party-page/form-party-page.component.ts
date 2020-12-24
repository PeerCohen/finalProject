import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Emailc } from 'src/app/shared/modals/Email';
import { Employee } from 'src/app/shared/modals/employee';
import { SpecialInvent } from 'src/app/shared/modals/special-invent';
import { EmloyeeService } from 'src/app/shared/services/emloyee.service';
import { ManagerService } from 'src/app/shared/services/manager.service';
import { DialogOfSpecialInventComponent } from '../dialog-of-special-invent/dialog-of-special-invent.component';

@Component({
  selector: 'app-form-party-page',
  templateUrl: './form-party-page.component.html',
  styleUrls: ['./form-party-page.component.css']
})
export class FormPartyPageComponent implements OnInit {

  constructor(public managerService:ManagerService,public dialog: MatDialog,public empSer: EmloyeeService) { }
  @Input() isDateEvent: boolean = false;
  @Input() iscountOfPeople: boolean = false;
  @Input() kindOfevent:string;
  
  email: Emailc = new Emailc();
  data =new SpecialInvent();

  
  formGroupParty: FormGroup;

  ngOnInit(): void {
    this.formGroupParty = new FormGroup({
      name: new FormControl(),
      phone: new FormControl(),
      mail: new FormControl(),
      dateEvent: new FormControl(),
      countOfPeople: new FormControl(),
    }
    )
  }
  onSubmit(customerData) { 
    this.data.countOfPeople = this.formGroupParty.controls["countOfPeople"].value;
    this.data.dateEvent= this.formGroupParty.controls["dateEvent"].value;
    this.data.kindOfevent =this.kindOfevent;
    this.data.mail= this.formGroupParty.controls["mail"].value;
    this.data.name = this.formGroupParty.controls["name"].value;
    this.data.phone= this.formGroupParty.controls["phone"].value;
    const dialogRef = this.dialog.open(DialogOfSpecialInventComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });   
    this.formGroupParty.reset();
    this.managerService.setSpecialOrder(this.data).subscribe(res=>{
      
    });
    
    this.email.Subject =   " הפניית בקשה עבור "+this.kindOfevent;
    this.email.email = this.data.mail;
    this.email.Body = ' שלום '+ this.data.name +'\n'+"  בקשתך התקבלה במערכת אנו ניצור איכם קשר בהקדם"+'\n'+"תודה !";
    this.empSer.sendMail(this.email).subscribe(res => console.log('שליחת המייל הצליחה '));
    console.warn('Your order has been submitted', this.data);
  }

}
