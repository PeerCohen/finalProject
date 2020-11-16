import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenBottomSheetSigninComponent } from './open-bottom-sheet-signin.component';

describe('OpenBottomSheetSigninComponent', () => {
  let component: OpenBottomSheetSigninComponent;
  let fixture: ComponentFixture<OpenBottomSheetSigninComponent>;

  beforeEach(async(() => {
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
