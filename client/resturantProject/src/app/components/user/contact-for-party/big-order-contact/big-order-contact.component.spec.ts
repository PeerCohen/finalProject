import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BigOrderContactComponent } from './big-order-contact.component';

describe('BigOrderContactComponent', () => {
  let component: BigOrderContactComponent;
  let fixture: ComponentFixture<BigOrderContactComponent>;

  beforeEach(waitForAsync(() => {
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
