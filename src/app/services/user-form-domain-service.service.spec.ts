import { TestBed } from '@angular/core/testing';

import { UserFormDomainServiceService } from './user-form-domain-service.service';

describe('UserFormDomainServiceService', () => {
  let service: UserFormDomainServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserFormDomainServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
