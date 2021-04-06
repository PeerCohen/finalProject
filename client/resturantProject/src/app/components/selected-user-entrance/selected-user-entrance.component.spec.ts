import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SelectedUserEntranceComponent } from './selected-user-entrance.component';

describe('SelectedUserEntranceComponent', () => {
  let component: SelectedUserEntranceComponent;
  let fixture: ComponentFixture<SelectedUserEntranceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedUserEntranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedUserEntranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
