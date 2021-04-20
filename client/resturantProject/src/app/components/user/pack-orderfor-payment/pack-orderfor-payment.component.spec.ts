import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackOrderforPaymentComponent } from './pack-orderfor-payment.component';

describe('PackOrderforPaymentComponent', () => {
  let component: PackOrderforPaymentComponent;
  let fixture: ComponentFixture<PackOrderforPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackOrderforPaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackOrderforPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
