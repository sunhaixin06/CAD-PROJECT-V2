import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonitorService } from './services/monitor.services';
import { MonitorRoutingModule } from './monitor.module.routes';
import { MonitorComponent } from './views/monitor/monitor.component';
import { EchartComponent } from './views/echart/echart.component';

import { GridModule, ExcelModule } from '@progress/kendo-angular-grid';
import { NgxEchartsModule  } from 'ngx-echarts';
import { GridService } from './services/grid.services';
import { EchartService } from './services/echart.services';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { SystemLogGridComponent } from './views/systemLogGrid/systemLogGrid.component';
import { BusinessLogGridComponent } from './views/businessLogGrid/businessLogGrid.component';
import { MonitorPage } from './pages/monitorPage/monitor.page';
import { SafeHtmlPipe } from './utility/safeHTML';

@NgModule({
  declarations: [
    MonitorComponent,
    EchartComponent,
    SystemLogGridComponent,
    BusinessLogGridComponent,
    MonitorPage,
    SafeHtmlPipe
  ],
  imports: [
    MonitorRoutingModule,
    CommonModule,
    GridModule,
    ExcelModule,
    NgxEchartsModule,
    DateInputsModule,
    ButtonsModule,
  ],
  providers: [
    MonitorService,
    GridService,
    EchartService,
    DialogModule,
  ],
  entryComponents: [
  ]
})
export class MonitorModule {
  constructor() {
    console.log('MonitorModule 构造函数');
  }
}
