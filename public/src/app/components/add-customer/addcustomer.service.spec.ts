import { TestBed } from '@angular/core/testing';

import { AddcustomerService } from './addcustomer.service';

describe('AddcustomerService', () => {
  let service: AddcustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddcustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
