import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UpdatePresenceComponent } from './update-presence.component';

describe('UpdatePresenceComponent', () => {
  let component: UpdatePresenceComponent;
  let fixture: ComponentFixture<UpdatePresenceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePresenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePresenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
