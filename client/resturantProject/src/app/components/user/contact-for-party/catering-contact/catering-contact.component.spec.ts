import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CateringContactComponent } from './catering-contact.component';

describe('CateringContactComponent', () => {
  let component: CateringContactComponent;
  let fixture: ComponentFixture<CateringContactComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CateringContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CateringContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
