import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Menu } from 'src/app/shared/modals/menu';
import { MenuService } from 'src/app/shared/services/menu.service';

@Component({
  selector: 'app-add-dose-category',
  templateUrl: './add-dose-category.component.html',
  styleUrls: ['./add-dose-category.component.css']
})
export class AddDoseCategoryComponent implements OnInit {

  @Output() closeform = new EventEmitter();
  @Input() nameCategory: string;
  @Input() idCategory: number;
  close: boolean = false;
  doseData: Menu = new Menu();
  formGroupAddDose: FormGroup;
  succeeded: any;
  error: any;

  constructor(private _formBuilder: FormBuilder, public menuService: MenuService) { }

  ngOnInit(): void {

    this.formGroupAddDose = new FormGroup({
      nameDose: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),

    });


  }
  onFileChanged(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    this.doseData.image = file.name;
    reader.addEventListener('load', (event: any) => {
      this.doseData.ImageBase64 = event.target.result;
    });

    reader.readAsDataURL(file);
  }
  closeformAddDose(){
      this.closeform.emit(this.close);
  }
  addDoseToCategory() {
    this.doseData.nameDose = this.formGroupAddDose.controls.nameDose.value;
    this.doseData.price = this.formGroupAddDose.controls.price.value;
    this.doseData.category = this.idCategory;
    this.doseData.description = this.formGroupAddDose.controls.description.value;
    return this.menuService.addDose(this.doseData).subscribe(
      (res: any) => {
        this.succeeded = res;
        this.closeform.emit(this.close);
      },
      (err) => {
        this.error = err;
      });
  }
}
