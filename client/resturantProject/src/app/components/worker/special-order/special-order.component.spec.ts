import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SpecialOrderComponent } from './special-order.component';

describe('SpecialOrderComponent', () => {
  let component: SpecialOrderComponent;
  let fixture: ComponentFixture<SpecialOrderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
