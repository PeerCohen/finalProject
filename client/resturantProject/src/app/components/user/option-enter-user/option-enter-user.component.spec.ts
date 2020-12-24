import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionEnterUserComponent } from './option-enter-user.component';

describe('OptionEnterUserComponent', () => {
  let component: OptionEnterUserComponent;
  let fixture: ComponentFixture<OptionEnterUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionEnterUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionEnterUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
