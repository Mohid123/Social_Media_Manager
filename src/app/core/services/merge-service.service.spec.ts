import { TestBed } from '@angular/core/testing';

import { MergeServiceService } from './merge-service.service';

describe('MergeServiceService', () => {
  let service: MergeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MergeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
