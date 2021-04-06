import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BirthdayContactComponent } from './birthday-contact.component';

describe('BirthdayContactComponent', () => {
  let component: BirthdayContactComponent;
  let fixture: ComponentFixture<BirthdayContactComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BirthdayContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirthdayContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
