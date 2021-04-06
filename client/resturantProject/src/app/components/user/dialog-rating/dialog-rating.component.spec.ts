import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DialogRatingComponent } from './dialog-rating.component';

describe('DialogRatingComponent', () => {
  let component: DialogRatingComponent;
  let fixture: ComponentFixture<DialogRatingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
