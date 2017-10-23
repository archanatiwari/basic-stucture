import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ScheduleOfRateTradeFormComponent as SORTradeForm } from '../repair/schedule-of-rate-trade-form/schedule-of-rate-trade-form.component';
import { ScheduleOfRateTradeListComponent as SORTradeList} from '../repair/schedule-of-rate-trade-list/schedule-of-rate-trade-list.component';

const routes: Routes = [
    {
        path: '',
        component: SORTradeList,
    },
    {
      path: 'Trade',
      component: SORTradeForm,
    },
    {        
        path: 'Trade',
        redirectTo:'Trade', 
        pathMatch:'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }