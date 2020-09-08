import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandlingOrdersComponent } from './handling-orders.component';

describe('HandlingOrdersComponent', () => {
  let component: HandlingOrdersComponent;
  let fixture: ComponentFixture<HandlingOrdersComponent>;

  beforeEach(async(() => {
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
