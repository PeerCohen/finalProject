import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BigOrdersComponent } from './big-orders.component';

describe('BigOrdersComponent', () => {
  let component: BigOrdersComponent;
  let fixture: ComponentFixture<BigOrdersComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BigOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
