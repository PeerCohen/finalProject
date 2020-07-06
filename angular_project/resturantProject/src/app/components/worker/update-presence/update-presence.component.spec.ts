import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePresenceComponent } from './update-presence.component';

describe('UpdatePresenceComponent', () => {
  let component: UpdatePresenceComponent;
  let fixture: ComponentFixture<UpdatePresenceComponent>;

  beforeEach(async(() => {
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
