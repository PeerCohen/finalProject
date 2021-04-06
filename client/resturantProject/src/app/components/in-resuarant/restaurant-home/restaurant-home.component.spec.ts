import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RestaurantHomeComponent } from './restaurant-home.component';

describe('RestaurantHomeComponent', () => {
  let component: RestaurantHomeComponent;
  let fixture: ComponentFixture<RestaurantHomeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
