import { Injectable } from '@angular/core';
import { ESorTrades } from '../modal/e-sor-trades';

@Injectable()
export class ScheduleOfRateService {
    private data: any[] = ESorTrades;
    private counter: number = ESorTrades.length;

    public ESorTrades(): any[] {
        return this.data;
    }

    public remove(sorTrade: any): void {
        const index = this.data.findIndex(({ id }) => id === sorTrade.id);
        this.data.splice(index, 1);
    }

    public save(sorTrade: any, isNew: boolean): void {
        if (isNew) {
            sorTrade.id = this.counter++;
            this.data.splice(0, 0, sorTrade);
        } else {
            Object.assign(
                this.data.find(({ id }) => id === sorTrade.id),
                sorTrade
            );
        }
    }
}

