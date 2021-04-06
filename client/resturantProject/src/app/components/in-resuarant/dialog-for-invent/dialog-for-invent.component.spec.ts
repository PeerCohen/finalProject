import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DialogForInventComponent } from './dialog-for-invent.component';

describe('DialogForInventComponent', () => {
  let component: DialogForInventComponent;
  let fixture: ComponentFixture<DialogForInventComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogForInventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogForInventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
