import { TestBed } from '@angular/core/testing';

import { WolontariuszeService } from './wolontariusze.service';

describe('WolontariuszeService', () => {
  let service: WolontariuszeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WolontariuszeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
