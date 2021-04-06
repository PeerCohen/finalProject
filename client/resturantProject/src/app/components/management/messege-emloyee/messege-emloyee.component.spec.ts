import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MessegeEmloyeeComponent } from './messege-emloyee.component';

describe('MessegeEmloyeeComponent', () => {
  let component: MessegeEmloyeeComponent;
  let fixture: ComponentFixture<MessegeEmloyeeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MessegeEmloyeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessegeEmloyeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
