import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftcardContactComponent } from './giftcard-contact.component';

describe('GiftcardContactComponent', () => {
  let component: GiftcardContactComponent;
  let fixture: ComponentFixture<GiftcardContactComponent>;

  beforeEach(async(() => {
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
