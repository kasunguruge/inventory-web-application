import { TestBed } from '@angular/core/testing';

import { CriticalItemService } from './critical-item.service';

describe('CriticalItemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CriticalItemService = TestBed.get(CriticalItemService);
    expect(service).toBeTruthy();
  });
});
