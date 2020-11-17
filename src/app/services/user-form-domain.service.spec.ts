import { TestBed } from '@angular/core/testing';

import { UserFormDomainService } from './user-form-domain.service';

describe('UserFormDomainServiceService', () => {
  let service: UserFormDomainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserFormDomainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
