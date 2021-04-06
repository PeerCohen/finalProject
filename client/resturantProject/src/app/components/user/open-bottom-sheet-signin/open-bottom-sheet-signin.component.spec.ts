import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OpenBottomSheetSigninComponent } from './open-bottom-sheet-signin.component';

describe('OpenBottomSheetSigninComponent', () => {
  let component: OpenBottomSheetSigninComponent;
  let fixture: ComponentFixture<OpenBottomSheetSigninComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenBottomSheetSigninComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenBottomSheetSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
