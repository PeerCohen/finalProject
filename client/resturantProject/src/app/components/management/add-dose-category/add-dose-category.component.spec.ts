import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDoseCategoryComponent } from './add-dose-category.component';

describe('AddDoseCategoryComponent', () => {
  let component: AddDoseCategoryComponent;
  let fixture: ComponentFixture<AddDoseCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDoseCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDoseCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
