import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DoseCategoryComponent } from './dose-category.component';

describe('DoseCategoryComponent', () => {
  let component: DoseCategoryComponent;
  let fixture: ComponentFixture<DoseCategoryComponent>;

  beforeEach(waitForAsync(() => {
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
