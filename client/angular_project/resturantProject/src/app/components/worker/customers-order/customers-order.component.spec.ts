import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersOrderComponent } from './customers-order.component';

describe('CustomersOrderComponent', () => {
  let component: CustomersOrderComponent;
  let fixture: ComponentFixture<CustomersOrderComponent>;

  beforeEach(async(() => {
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
