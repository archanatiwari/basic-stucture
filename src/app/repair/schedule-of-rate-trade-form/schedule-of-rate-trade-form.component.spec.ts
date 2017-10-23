import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleOfRateTradeFormComponent } from './schedule-of-rate-trade-form.component';

describe('ScheduleOfRateTradeFormComponent', () => {
  let component: ScheduleOfRateTradeFormComponent;
  let fixture: ComponentFixture<ScheduleOfRateTradeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleOfRateTradeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleOfRateTradeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
