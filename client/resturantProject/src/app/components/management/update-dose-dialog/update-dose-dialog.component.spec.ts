import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDoseDialogComponent } from './update-dose-dialog.component';

describe('UpdateDoseDialogComponent', () => {
  let component: UpdateDoseDialogComponent;
  let fixture: ComponentFixture<UpdateDoseDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateDoseDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDoseDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
