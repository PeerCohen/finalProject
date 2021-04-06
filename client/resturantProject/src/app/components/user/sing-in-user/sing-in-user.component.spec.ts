import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SingInUserComponent } from './sing-in-user.component';

describe('SingInUserComponent', () => {
  let component: SingInUserComponent;
  let fixture: ComponentFixture<SingInUserComponent>;

  beforeEach(waitForAsync(() => {
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
