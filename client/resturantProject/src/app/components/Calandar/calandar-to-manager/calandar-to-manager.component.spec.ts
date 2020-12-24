import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalandarToManagerComponent } from './calandar-to-manager.component';

describe('CalandarToManagerComponent', () => {
  let component: CalandarToManagerComponent;
  let fixture: ComponentFixture<CalandarToManagerComponent>;

  beforeEach(async(() => {
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
