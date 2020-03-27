import { TestBed } from '@angular/core/testing';

import { GlobalCovid19DataService } from './global-covid19-data.service';

describe('GlobalCovid19DataService', () => {
  let service: GlobalCovid19DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalCovid19DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
