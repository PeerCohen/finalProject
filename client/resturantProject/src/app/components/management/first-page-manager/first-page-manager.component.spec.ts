import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstPageManagerComponent } from './first-page-manager.component';

describe('FirstPageManagerComponent', () => {
  let component: FirstPageManagerComponent;
  let fixture: ComponentFixture<FirstPageManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstPageManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstPageManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
