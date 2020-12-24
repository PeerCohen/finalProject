import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogOfSpecialInventComponent } from './dialog-of-special-invent.component';

describe('DialogOfSpecialInventComponent', () => {
  let component: DialogOfSpecialInventComponent;
  let fixture: ComponentFixture<DialogOfSpecialInventComponent>;

  beforeEach(async(() => {
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
