import { TestBed, inject } from '@angular/core/testing';

import { GotHttpServiceService } from './got-http-service.service';

describe('GotHttpServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GotHttpServiceService]
    });
  });

  it('should be created', inject([GotHttpServiceService], (service: GotHttpServiceService) => {
    expect(service).toBeTruthy();
  }));
});
