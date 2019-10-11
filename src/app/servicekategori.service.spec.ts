import { TestBed } from '@angular/core/testing';

import { ServicekategoriService } from './servicekategori.service';

describe('ServicekategoriService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicekategoriService = TestBed.get(ServicekategoriService);
    expect(service).toBeTruthy();
  });
});
