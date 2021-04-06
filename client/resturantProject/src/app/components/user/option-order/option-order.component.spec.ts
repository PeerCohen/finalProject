import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OptionOrderComponent } from './option-order.component';

describe('OptionOrderComponent', () => {
  let component: OptionOrderComponent;
  let fixture: ComponentFixture<OptionOrderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
