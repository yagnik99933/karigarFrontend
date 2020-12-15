import { TestBed } from '@angular/core/testing';

import { ProviderstatusService } from './providerstatus.service';

describe('ProviderstatusService', () => {
  let service: ProviderstatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProviderstatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
