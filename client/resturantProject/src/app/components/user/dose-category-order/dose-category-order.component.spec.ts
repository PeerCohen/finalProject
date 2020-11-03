import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoseCategoryOrderComponent } from './dose-category-order.component';

describe('DoseCategoryOrderComponent', () => {
  let component: DoseCategoryOrderComponent;
  let fixture: ComponentFixture<DoseCategoryOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoseCategoryOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoseCategoryOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
