import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialodhandleComponent } from './dialodhandle.component';

describe('DialodhandleComponent', () => {
  let component: DialodhandleComponent;
  let fixture: ComponentFixture<DialodhandleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialodhandleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialodhandleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
