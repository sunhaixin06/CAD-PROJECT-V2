import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppPage } from './pages/app.page';
import { MainModuleRouting } from './main.module.routes';
import { PreloadingService } from './services/preloadingService';
import { TimeLineModule } from '../../modules/timeline/timeline.module';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MonitorModule } from '../../modules/monitor/monitor.module';
import { NgxEchartsModule } from 'ngx-echarts';
import { ExcelModule, GridModule } from '@progress/kendo-angular-grid';

import { IndexModule } from '../../modules/component/index.module';
import { LoginPageComponent } from '../../modules/component/login/login.component';

@NgModule({
  declarations: [
    AppPage,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    MainModuleRouting,
    TimeLineModule,
    HttpModule,
    BrowserAnimationsModule,
    GridModule,
    ExcelModule,
    NgxEchartsModule,
    IndexModule,
    MonitorModule
  ],
  providers: [PreloadingService],
  bootstrap: [AppPage]
})
export class MainModule { }
