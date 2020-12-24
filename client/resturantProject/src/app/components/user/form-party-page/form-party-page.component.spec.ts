import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPartyPageComponent } from './form-party-page.component';

describe('FormPartyPageComponent', () => {
  let component: FormPartyPageComponent;
  let fixture: ComponentFixture<FormPartyPageComponent>;

  beforeEach(async(() => {
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
