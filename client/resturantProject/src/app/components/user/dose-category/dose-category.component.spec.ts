import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoseCategoryComponent } from './dose-category.component';

describe('DoseCategoryComponent', () => {
  let component: DoseCategoryComponent;
  let fixture: ComponentFixture<DoseCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoseCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoseCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
