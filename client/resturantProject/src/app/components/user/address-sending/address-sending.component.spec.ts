import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddressSendingComponent } from './address-sending.component';

describe('AddressSendingComponent', () => {
  let component: AddressSendingComponent;
  let fixture: ComponentFixture<AddressSendingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressSendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressSendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
