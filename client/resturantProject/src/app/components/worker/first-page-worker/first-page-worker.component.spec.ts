import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FirstPageWorkerComponent } from './first-page-worker.component';

describe('FirstPageWorkerComponent', () => {
  let component: FirstPageWorkerComponent;
  let fixture: ComponentFixture<FirstPageWorkerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstPageWorkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstPageWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
