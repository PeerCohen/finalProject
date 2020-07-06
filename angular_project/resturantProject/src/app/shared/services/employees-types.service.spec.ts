import { TestBed } from '@angular/core/testing';

import { EmployeesTypesService } from './employees-types.service';

describe('EmployeesTypesService', () => {
  let service: EmployeesTypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeesTypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
