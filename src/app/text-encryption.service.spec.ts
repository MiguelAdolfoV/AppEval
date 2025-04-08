import { TestBed } from '@angular/core/testing';

import { TextEncryptionService } from './text-encryption.service';

describe('TextEncryptionService', () => {
  let service: TextEncryptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextEncryptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
