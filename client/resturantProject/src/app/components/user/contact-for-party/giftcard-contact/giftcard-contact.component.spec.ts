import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GiftcardContactComponent } from './giftcard-contact.component';

describe('GiftcardContactComponent', () => {
  let component: GiftcardContactComponent;
  let fixture: ComponentFixture<GiftcardContactComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GiftcardContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftcardContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
