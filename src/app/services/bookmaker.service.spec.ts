/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BookmakerService } from './bookmaker.service';

describe('Service: Bookmaker', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookmakerService]
    });
  });

  it('should ...', inject([BookmakerService], (service: BookmakerService) => {
    expect(service).toBeTruthy();
  }));
});
