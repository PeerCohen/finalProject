import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DisplayMenuComponent } from './display-menu.component';

describe('DisplayMenuComponent', () => {
  let component: DisplayMenuComponent;
  let fixture: ComponentFixture<DisplayMenuComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
