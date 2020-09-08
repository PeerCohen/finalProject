import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPresenceComponent } from './my-presence.component';

describe('MyPresenceComponent', () => {
  let component: MyPresenceComponent;
  let fixture: ComponentFixture<MyPresenceComponent>;

  beforeEach(async(() => {
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
