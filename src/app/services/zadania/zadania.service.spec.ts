import { TestBed } from '@angular/core/testing';

import { ZadaniaService } from './zadania.service';

describe('ZadaniaService', () => {
  let service: ZadaniaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZadaniaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
