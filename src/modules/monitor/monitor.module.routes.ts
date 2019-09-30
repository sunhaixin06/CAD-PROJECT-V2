import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EchartComponent } from './views/echart/echart.component';
import { SystemLogGridComponent } from './views/systemLogGrid/systemLogGrid.component';
import { BusinessLogGridComponent } from './views/businessLogGrid/businessLogGrid.component';
import { MonitorPage } from './pages/monitorPage/monitor.page';


const appRoutes: Routes = [
  {
    path: 'monitor',
    component: MonitorPage,
    // children: [{
    //   path: 'businessloggrid',
    //   component: BusinessLogGridComponent
    // },
    // {
    //   path: 'systemloggrid',
    //   component: SystemLogGridComponent
    // }]
  },
  {
    path: 'monitor/businessloggrid',
    component: BusinessLogGridComponent
  },
  {
    path: 'monitor/systemloggrid',
    component: SystemLogGridComponent
  },
  { path: '',   redirectTo: 'monitor', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class MonitorRoutingModule { }
