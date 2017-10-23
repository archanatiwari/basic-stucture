import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormsModule, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-schedule-of-rate-trade-form',
  templateUrl: './schedule-of-rate-trade-form.component.html',
  styleUrls: ['./schedule-of-rate-trade-form.component.scss']
})
export class ScheduleOfRateTradeFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public SORTrade: Array < string > = [
    "Shared",
    "Client",
    "Contractor"
  ];

  public SORTradeForm = new FormGroup({
    SORTrade: new FormControl('',),
    MainTrade: new FormControl('',),
    TradeSMV: new FormControl('', ),
  });
  
  @Output()
  isOpen = new EventEmitter()

  @Output()
  isClose = new EventEmitter()

  open() {
    this.isOpen.emit();
  }

  close() {
    this.isClose.emit('cancel');
  }

}
