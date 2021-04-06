import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ManagerWorkerComponent } from './manager-worker.component';

describe('ManagerWorkerComponent', () => {
  let component: ManagerWorkerComponent;
  let fixture: ComponentFixture<ManagerWorkerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerWorkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
