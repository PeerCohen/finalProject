import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSwiperComponent } from './menu-swiper.component';

describe('MenuSwiperComponent', () => {
  let component: MenuSwiperComponent;
  let fixture: ComponentFixture<MenuSwiperComponent>;

  beforeEach(async(() => {
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
