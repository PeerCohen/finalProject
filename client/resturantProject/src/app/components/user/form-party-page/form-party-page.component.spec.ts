import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FormPartyPageComponent } from './form-party-page.component';

describe('FormPartyPageComponent', () => {
  let component: FormPartyPageComponent;
  let fixture: ComponentFixture<FormPartyPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPartyPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPartyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
