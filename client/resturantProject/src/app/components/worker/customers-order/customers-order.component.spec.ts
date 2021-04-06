import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CustomersOrderComponent } from './customers-order.component';

describe('CustomersOrderComponent', () => {
  let component: CustomersOrderComponent;
  let fixture: ComponentFixture<CustomersOrderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomersOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
