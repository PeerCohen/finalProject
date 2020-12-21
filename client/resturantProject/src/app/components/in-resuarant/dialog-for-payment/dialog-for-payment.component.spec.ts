import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogForPaymentComponent } from './dialog-for-payment.component';

describe('DialogForPaymentComponent', () => {
  let component: DialogForPaymentComponent;
  let fixture: ComponentFixture<DialogForPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogForPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogForPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
