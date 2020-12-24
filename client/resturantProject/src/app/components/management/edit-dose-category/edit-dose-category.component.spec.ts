import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDoseCategoryComponent } from './edit-dose-category.component';

describe('EditDoseCategoryComponent', () => {
  let component: EditDoseCategoryComponent;
  let fixture: ComponentFixture<EditDoseCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDoseCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDoseCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
