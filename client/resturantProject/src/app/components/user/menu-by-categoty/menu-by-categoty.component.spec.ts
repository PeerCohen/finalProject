import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MenuByCategotyComponent } from './menu-by-categoty.component';

describe('MenuByCategotyComponent', () => {
  let component: MenuByCategotyComponent;
  let fixture: ComponentFixture<MenuByCategotyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuByCategotyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuByCategotyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
