import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstPageWorkerComponent } from './first-page-worker.component';

describe('FirstPageWorkerComponent', () => {
  let component: FirstPageWorkerComponent;
  let fixture: ComponentFixture<FirstPageWorkerComponent>;

  beforeEach(async(() => {
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
