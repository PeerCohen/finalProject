import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartInRestaurantComponent } from './cart-in-restaurant.component';

describe('CartInRestaurantComponent', () => {
  let component: CartInRestaurantComponent;
  let fixture: ComponentFixture<CartInRestaurantComponent>;

  beforeEach(async(() => {
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
