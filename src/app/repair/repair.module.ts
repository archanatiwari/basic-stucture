/**
 * @angular dependency
 */ 
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/**
 * Kendo UI dependency
 */
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { GridModule } from '@progress/kendo-angular-grid';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { PopupModule } from '@progress/kendo-angular-popup';


/**
 * Module and Component Dependency
 */
import { ScheduleOfRateTradeFormComponent } from './schedule-of-rate-trade-form/schedule-of-rate-trade-form.component';
import { ScheduleOfRateTradeListComponent } from './schedule-of-rate-trade-list/schedule-of-rate-trade-list.component';
import { ScheduleOfRateService } from '../services/schedule-of-rate.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonsModule,
    InputsModule,
    DropDownsModule,
    GridModule,
    DialogModule,
    PopupModule
  ],
  providers:[ ScheduleOfRateService ],
  declarations: [
    ScheduleOfRateTradeFormComponent, 
    ScheduleOfRateTradeListComponent
  ]
})
export class RepairModule {} 
