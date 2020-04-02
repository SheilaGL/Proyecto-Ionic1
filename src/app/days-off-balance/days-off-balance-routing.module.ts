import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DaysoffbalancePage } from './days-off-balance.page';

const routes: Routes = [
  {
    path: '',
    component: DaysoffbalancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarPageRoutingModule {}
