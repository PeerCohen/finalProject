import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWorkerComponent } from './list-worker.component';

describe('ListWorkerComponent', () => {
  let component: ListWorkerComponent;
  let fixture: ComponentFixture<ListWorkerComponent>;

  beforeEach(async(() => {
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
