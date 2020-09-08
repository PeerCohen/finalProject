import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingInUserComponent } from './sing-in-user.component';

describe('SingInUserComponent', () => {
  let component: SingInUserComponent;
  let fixture: ComponentFixture<SingInUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingInUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingInUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
