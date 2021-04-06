import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditDoseCategoryComponent } from './edit-dose-category.component';

describe('EditDoseCategoryComponent', () => {
  let component: EditDoseCategoryComponent;
  let fixture: ComponentFixture<EditDoseCategoryComponent>;

  beforeEach(waitForAsync(() => {
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
