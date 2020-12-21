import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentInRestaurantComponent } from './payment-in-restaurant.component';

describe('PaymentInRestaurantComponent', () => {
  let component: PaymentInRestaurantComponent;
  let fixture: ComponentFixture<PaymentInRestaurantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentInRestaurantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentInRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
