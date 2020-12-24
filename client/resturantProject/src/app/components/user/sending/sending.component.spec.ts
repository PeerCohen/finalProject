import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendingComponent } from './sending.component';

describe('SendingComponent', () => {
  let component: SendingComponent;
  let fixture: ComponentFixture<SendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
