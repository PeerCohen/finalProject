import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalandarToEmployeeComponent } from './calandar-to-employee.component';

describe('CalandarToEmployeeComponent', () => {
  let component: CalandarToEmployeeComponent;
  let fixture: ComponentFixture<CalandarToEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalandarToEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalandarToEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
