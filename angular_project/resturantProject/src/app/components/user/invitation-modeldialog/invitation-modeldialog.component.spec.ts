import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitationModeldialogComponent } from './invitation-modeldialog.component';

describe('InvitationModeldialogComponent', () => {
  let component: InvitationModeldialogComponent;
  let fixture: ComponentFixture<InvitationModeldialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvitationModeldialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitationModeldialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
