import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FavoriteDoseComponent } from './favorite-dose.component';

describe('FavoriteDoseComponent', () => {
  let component: FavoriteDoseComponent;
  let fixture: ComponentFixture<FavoriteDoseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteDoseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteDoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
