import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DialogSaveTableComponent } from './dialog-save-table.component';

describe('DialogSaveTableComponent', () => {
  let component: DialogSaveTableComponent;
  let fixture: ComponentFixture<DialogSaveTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogSaveTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSaveTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
