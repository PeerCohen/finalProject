import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HandlingOrdersComponent } from './handling-orders.component';

describe('HandlingOrdersComponent', () => {
  let component: HandlingOrdersComponent;
  let fixture: ComponentFixture<HandlingOrdersComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HandlingOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandlingOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
