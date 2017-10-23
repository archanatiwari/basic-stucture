import { TestBed, inject } from '@angular/core/testing';

import { ScheduleOfRateService } from './schedule-of-rate.service';

describe('ScheduleOfRateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScheduleOfRateService]
    });
  });

  it('should be created', inject([ScheduleOfRateService], (service: ScheduleOfRateService) => {
    expect(service).toBeTruthy();
  }));
});
