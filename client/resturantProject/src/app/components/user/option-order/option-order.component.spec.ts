import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionOrderComponent } from './option-order.component';

describe('OptionOrderComponent', () => {
  let component: OptionOrderComponent;
  let fixture: ComponentFixture<OptionOrderComponent>;

  beforeEach(async(() => {
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
