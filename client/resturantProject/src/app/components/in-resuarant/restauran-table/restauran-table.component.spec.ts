import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RestauranTableComponent } from './restauran-table.component';

describe('RestauranTableComponent', () => {
  let component: RestauranTableComponent;
  let fixture: ComponentFixture<RestauranTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RestauranTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestauranTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
