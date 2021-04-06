import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LogoHeadComponent } from './logo-head.component';

describe('LogoHeadComponent', () => {
  let component: LogoHeadComponent;
  let fixture: ComponentFixture<LogoHeadComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
