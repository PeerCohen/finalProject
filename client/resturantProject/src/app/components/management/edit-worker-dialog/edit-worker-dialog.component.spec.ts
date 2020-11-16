import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWorkerDialogComponent } from './edit-worker-dialog.component';

describe('EditWorkerDialogComponent', () => {
  let component: EditWorkerDialogComponent;
  let fixture: ComponentFixture<EditWorkerDialogComponent>;

  beforeEach(async(() => {
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
