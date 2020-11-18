import { TestBed } from '@angular/core/testing';

import { EmloyeeService } from './emloyee.service';

describe('EmloyeeService', () => {
  let service: EmloyeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmloyeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
