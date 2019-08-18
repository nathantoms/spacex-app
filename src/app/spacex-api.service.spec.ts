/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SpacexApiService } from './spacex-api.service';

describe('Service: SpacexApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpacexApiService]
    });
  });

  it('should ...', inject([SpacexApiService], (service: SpacexApiService) => {
    expect(service).toBeTruthy();
  }));
});
