import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TimeLineModuleRoutes } from './timeline.module.routes';

import { TimelineMp3Component } from './views/sound/timeline-mp3.component';
import { TimelineDetailsComponent } from './views/detail/timeline-details.component';
import { TimelineFujianComponent } from './views/file/timeline-fujian.component';
import { TimelineMapComponent } from './views/map/timeline-map.component';
import { TimelinePictureComponent } from './views/picture/timeline-picture.component';
import { TimelineVideoComponent } from './views/video/timeline-video.component';

import { TimelineComponent } from './pages/index/timeline.component';
import { TimelineService } from './services/timeline.service';
import { BaseLeftMouseDirective } from './views/picture/baseleftmouseDirective';
import { BaseRightMouseDirective } from './views/picture/baserightmouseDirective';
import { ListMouseDirective } from './views/picture/listmouseDirective';
import { SafeHtmlPipe } from './utility/safeHTML';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    TimelineComponent,
    TimelineDetailsComponent,
    TimelineFujianComponent,
    TimelineMapComponent,
    TimelinePictureComponent,
    TimelineVideoComponent,
    TimelineMp3Component,
    BaseLeftMouseDirective,
    BaseRightMouseDirective,
    ListMouseDirective,
    SafeHtmlPipe
  ],
  imports: [
    TimeLineModuleRoutes,
    FormsModule,
    ButtonsModule,
    // BrowserAnimationsModule,
    DropDownsModule,
    DialogModule,
    LayoutModule,
    CommonModule
  ],
  providers: [
    TimelineService,
  ],
  exports: [
    TimelineComponent,
    TimelineVideoComponent,
    TimelineMp3Component,
  ],
  entryComponents: [
    TimelineDetailsComponent,
    TimelineFujianComponent,
    TimelineMapComponent,
    TimelinePictureComponent,
    TimelineVideoComponent,
    TimelineMp3Component,
  ]
})
export class TimeLineModule { }
