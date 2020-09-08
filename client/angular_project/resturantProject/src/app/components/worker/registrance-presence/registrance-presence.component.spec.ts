import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrancePresenceComponent } from './registrance-presence.component';

describe('RegistrancePresenceComponent', () => {
  let component: RegistrancePresenceComponent;
  let fixture: ComponentFixture<RegistrancePresenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrancePresenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrancePresenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
