import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimelineComponent } from './pages/index/timeline.component';

const appRoutes: Routes = [
  {
    path: 'timeline',
    component: TimelineComponent,
    // children: [{
    //   path: 'child2',
    //   component: Child2Component
    // }]
  },
  { path: '',   redirectTo: 'timeline', pathMatch: 'full' }
];

@NgModule({
    imports: [
      RouterModule.forChild(
        appRoutes
      )
     ],
    exports: [ RouterModule ]
  })
  export class TimeLineModuleRoutes {
}
