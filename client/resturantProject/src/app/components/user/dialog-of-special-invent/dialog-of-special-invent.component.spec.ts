import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DialogOfSpecialInventComponent } from './dialog-of-special-invent.component';

describe('DialogOfSpecialInventComponent', () => {
  let component: DialogOfSpecialInventComponent;
  let fixture: ComponentFixture<DialogOfSpecialInventComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogOfSpecialInventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogOfSpecialInventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
