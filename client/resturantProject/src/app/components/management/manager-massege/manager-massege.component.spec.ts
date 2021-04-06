import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ManagerMassegeComponent } from './manager-massege.component';

describe('ManagerMassegeComponent', () => {
  let component: ManagerMassegeComponent;
  let fixture: ComponentFixture<ManagerMassegeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerMassegeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerMassegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
