import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DishesPopularComponent } from './dishes-popular.component';

describe('DishesPopularComponent', () => {
  let component: DishesPopularComponent;
  let fixture: ComponentFixture<DishesPopularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DishesPopularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DishesPopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
