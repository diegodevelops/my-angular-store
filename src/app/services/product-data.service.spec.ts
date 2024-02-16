import { TestBed } from '@angular/core/testing';

import { ProductDataService } from './product-data.service';
import Product from '../models/Product';

describe('ProductDataService', () => {
  let service: ProductDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return product array', () => {
    const data = service.getProducts().subscribe((data: Product[]) => {
      expect(data.length).toBeGreaterThan(0);
    })
  })
});
