/**
 * @angular dependency
 */ 
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

/**
 * kendo UI dependency
 */ 
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';

/**
 * Modules,Components and Services Dependency
 */
import { ScheduleOfRateService  } from '../../services/schedule-of-rate.service';

const formGroup = dataItem => new FormGroup({});

@Component({
  selector: 'app-schedule-of-rate-trade-list',
  templateUrl: './schedule-of-rate-trade-list.component.html',
  styleUrls: ['./schedule-of-rate-trade-list.component.scss']
})

export class ScheduleOfRateTradeListComponent implements OnInit {

private gridView: GridDataResult;
public gridData: any[];
private pageSize: number = 10;
private skip: number = 0;

public formGroup: FormGroup;
private editedRowIndex: number;



constructor(private service: ScheduleOfRateService) {
  this.loadItems();
}

public ngOnInit(): void {
    this.gridData = this.service.ESorTrades();
}

protected pageChange(event: PageChangeEvent): void {
  this.skip = event.skip;
  this.loadItems();
}
private loadItems(): void {

        if (!(this.skip) || !(this.skip + this.pageSize)) { return; }

        this.gridView = {
            data: this.gridData.slice(this.skip, this.skip + this.pageSize),
            total: this.gridData.length
        };
    }




public cancelHandler({ sender, rowIndex }) {
    this.closeEditor(sender, rowIndex);
}

public removeHandler({ dataItem }): void {
    this.service.remove(dataItem);
}

private closeEditor(grid, rowIndex = this.editedRowIndex) {
    grid.closeRow(rowIndex);
    this.editedRowIndex = undefined;
    this.formGroup = undefined;
}
public opened = false;

public close(status) {
  this.opened = false;
}

public open() {
  this.opened = true;
}
}