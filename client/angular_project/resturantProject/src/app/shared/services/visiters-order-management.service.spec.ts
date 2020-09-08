import { TestBed } from '@angular/core/testing';

import { VisitersOrderManagementService } from './visiters-order-management.service';

describe('VisitersOrderManagementService', () => {
  let service: VisitersOrderManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisitersOrderManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
