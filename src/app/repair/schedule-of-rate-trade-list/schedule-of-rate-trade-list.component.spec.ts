import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleOfRateTradeListComponent } from './schedule-of-rate-trade-list.component';

describe('ScheduleOfRateTradeListComponent', () => {
  let component: ScheduleOfRateTradeListComponent;
  let fixture: ComponentFixture<ScheduleOfRateTradeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleOfRateTradeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleOfRateTradeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
