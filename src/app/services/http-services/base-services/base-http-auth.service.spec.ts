import { TestBed } from '@angular/core/testing';

import { BaseHttpAuthService } from './base-http-auth.service';

describe('BaseHttpAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BaseHttpAuthService = TestBed.get(BaseHttpAuthService);
    expect(service).toBeTruthy();
  });
});
