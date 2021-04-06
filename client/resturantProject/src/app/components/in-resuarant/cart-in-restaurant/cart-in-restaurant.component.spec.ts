import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CartInRestaurantComponent } from './cart-in-restaurant.component';

describe('CartInRestaurantComponent', () => {
  let component: CartInRestaurantComponent;
  let fixture: ComponentFixture<CartInRestaurantComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CartInRestaurantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartInRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
