import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorDialogCounthandleDoseComponent } from './error-dialog-counthandle-dose.component';

describe('ErrorDialogCounthandleDoseComponent', () => {
  let component: ErrorDialogCounthandleDoseComponent;
  let fixture: ComponentFixture<ErrorDialogCounthandleDoseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorDialogCounthandleDoseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorDialogCounthandleDoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
