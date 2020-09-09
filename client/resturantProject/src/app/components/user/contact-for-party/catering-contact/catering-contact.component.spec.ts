import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CateringContactComponent } from './catering-contact.component';

describe('CateringContactComponent', () => {
  let component: CateringContactComponent;
  let fixture: ComponentFixture<CateringContactComponent>;

  beforeEach(async(() => {
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
