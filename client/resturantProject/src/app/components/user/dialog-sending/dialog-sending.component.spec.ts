import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DialogSendingComponent } from './dialog-sending.component';

describe('DialogSendingComponent', () => {
  let component: DialogSendingComponent;
  let fixture: ComponentFixture<DialogSendingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogSendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
