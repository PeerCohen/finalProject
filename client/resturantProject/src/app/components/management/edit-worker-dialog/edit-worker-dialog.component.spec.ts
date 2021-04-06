import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditWorkerDialogComponent } from './edit-worker-dialog.component';

describe('EditWorkerDialogComponent', () => {
  let component: EditWorkerDialogComponent;
  let fixture: ComponentFixture<EditWorkerDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditWorkerDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditWorkerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
