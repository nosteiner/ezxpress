import { TestBed, inject } from '@angular/core/testing';

import { EzxpressService } from './ezxpress.service';

describe('EzxpressService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EzxpressService]
    });
  });

  it('should be created', inject([EzxpressService], (service: EzxpressService) => {
    expect(service).toBeTruthy();
  }));
});
