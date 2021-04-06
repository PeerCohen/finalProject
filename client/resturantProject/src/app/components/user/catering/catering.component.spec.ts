import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CateringComponent } from './catering.component';

describe('CateringComponent', () => {
  let component: CateringComponent;
  let fixture: ComponentFixture<CateringComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CateringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CateringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
