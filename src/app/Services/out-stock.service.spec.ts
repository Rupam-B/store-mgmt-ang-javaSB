import { TestBed } from '@angular/core/testing';

import { OutStockService } from './out-stock.service';

describe('OutStockService', () => {
  let service: OutStockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OutStockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
