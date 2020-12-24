import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigOrderContactComponent } from './big-order-contact.component';

describe('BigOrderContactComponent', () => {
  let component: BigOrderContactComponent;
  let fixture: ComponentFixture<BigOrderContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigOrderContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigOrderContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
