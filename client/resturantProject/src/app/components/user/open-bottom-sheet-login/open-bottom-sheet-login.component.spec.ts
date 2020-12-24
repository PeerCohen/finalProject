import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenBottomSheetLoginComponent } from './open-bottom-sheet-login.component';

describe('OpenBottomSheetLoginComponent', () => {
  let component: OpenBottomSheetLoginComponent;
  let fixture: ComponentFixture<OpenBottomSheetLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenBottomSheetLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenBottomSheetLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
