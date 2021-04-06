import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CalandarToManagerComponent } from './calandar-to-manager.component';

describe('CalandarToManagerComponent', () => {
  let component: CalandarToManagerComponent;
  let fixture: ComponentFixture<CalandarToManagerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CalandarToManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalandarToManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
