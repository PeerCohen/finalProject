import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelephoneNumberInputComponent } from './telephone-number-input.component';

describe('TelephoneNumberInputComponent', () => {
  let component: TelephoneNumberInputComponent;
  let fixture: ComponentFixture<TelephoneNumberInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelephoneNumberInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelephoneNumberInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
