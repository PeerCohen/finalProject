import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DialogForAddToCartComponent } from './dialog-for-add-to-cart.component';

describe('DialogForAddToCartComponent', () => {
  let component: DialogForAddToCartComponent;
  let fixture: ComponentFixture<DialogForAddToCartComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogForAddToCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogForAddToCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
