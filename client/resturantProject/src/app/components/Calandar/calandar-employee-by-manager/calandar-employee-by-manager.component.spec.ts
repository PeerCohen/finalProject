import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalandarEmployeeByManagerComponent } from './calandar-employee-by-manager.component';

describe('CalandarEmployeeByManagerComponent', () => {
  let component: CalandarEmployeeByManagerComponent;
  let fixture: ComponentFixture<CalandarEmployeeByManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalandarEmployeeByManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalandarEmployeeByManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
