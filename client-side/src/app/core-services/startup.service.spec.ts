import { TestBed, inject } from '@angular/core/testing';

import { startupServiceFactory } from './startup.service';

describe('StartupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [startupServiceFactory]
    });
  });

  it('should be created', inject([startupServiceFactory], (service: startupServiceFactory) => {
    expect(service).toBeTruthy();
  }));
});
