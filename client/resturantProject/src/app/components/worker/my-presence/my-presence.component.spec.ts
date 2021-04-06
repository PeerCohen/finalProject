import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MyPresenceComponent } from './my-presence.component';

describe('MyPresenceComponent', () => {
  let component: MyPresenceComponent;
  let fixture: ComponentFixture<MyPresenceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPresenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPresenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
