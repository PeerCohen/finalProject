import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSendingComponent } from './dialog-sending.component';

describe('DialogSendingComponent', () => {
  let component: DialogSendingComponent;
  let fixture: ComponentFixture<DialogSendingComponent>;

  beforeEach(async(() => {
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
