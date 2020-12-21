import { TestBed } from '@angular/core/testing';

import { InRestaurantService } from './in-restaurant.service';

describe('InRestaurantService', () => {
  let service: InRestaurantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InRestaurantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
