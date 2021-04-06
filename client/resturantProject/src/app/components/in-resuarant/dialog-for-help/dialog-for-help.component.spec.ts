import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DialogForHelpComponent } from './dialog-for-help.component';

describe('DialogForHelpComponent', () => {
  let component: DialogForHelpComponent;
  let fixture: ComponentFixture<DialogForHelpComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogForHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogForHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
