import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MenuSwiperComponent } from './menu-swiper.component';

describe('MenuSwiperComponent', () => {
  let component: MenuSwiperComponent;
  let fixture: ComponentFixture<MenuSwiperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuSwiperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
