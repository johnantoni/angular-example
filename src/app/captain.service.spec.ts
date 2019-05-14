import { TestBed } from '@angular/core/testing';

import { CaptainService } from './captain.service';

describe('CaptainService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CaptainService = TestBed.get(CaptainService);
    expect(service).toBeTruthy();
  });
});
