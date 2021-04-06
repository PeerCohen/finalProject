import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListWorkerComponent } from './list-worker.component';

describe('ListWorkerComponent', () => {
  let component: ListWorkerComponent;
  let fixture: ComponentFixture<ListWorkerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListWorkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
