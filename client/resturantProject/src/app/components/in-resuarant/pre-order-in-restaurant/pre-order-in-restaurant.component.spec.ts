import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PreOrderInRestaurantComponent } from './pre-order-in-restaurant.component';

describe('PreOrderInRestaurantComponent', () => {
  let component: PreOrderInRestaurantComponent;
  let fixture: ComponentFixture<PreOrderInRestaurantComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PreOrderInRestaurantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreOrderInRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
