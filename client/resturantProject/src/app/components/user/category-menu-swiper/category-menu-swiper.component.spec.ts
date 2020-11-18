import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryMenuSwiperComponent } from './category-menu-swiper.component';

describe('CategoryMenuSwiperComponent', () => {
  let component: CategoryMenuSwiperComponent;
  let fixture: ComponentFixture<CategoryMenuSwiperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryMenuSwiperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryMenuSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
