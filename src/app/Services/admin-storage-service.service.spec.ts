import { TestBed } from '@angular/core/testing';

import { AdminStorageServiceService } from './admin-storage-service.service';

describe('AdminStorageServiceService', () => {
  let service: AdminStorageServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminStorageServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
