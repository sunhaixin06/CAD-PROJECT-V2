import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapComponent } from './pages/index/map.component';
import { GISRoutingModule } from './gis.module.routes';
import { Child1Component } from './pages/child1/child1.component';
import { Child2Component } from './pages/child2/child2.component';
import { MapService } from './services/map.services';

@NgModule({
  declarations: [
    MapComponent,
    Child1Component,
    Child2Component
  ],
  imports: [
    GISRoutingModule,
    CommonModule
  ],
  providers: [MapService]
})
export class GISModule {
  constructor() {
    console.log('GISModule 构造函数');
  }
}
