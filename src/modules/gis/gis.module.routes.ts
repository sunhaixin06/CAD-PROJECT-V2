import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './pages/index/map.component';
import { Child1Component } from './pages/child1/child1.component';
import { Child2Component } from './pages/child2/child2.component';



const appRoutes: Routes = [
    {
      path: 'gis.map',
      component: MapComponent,
      children: [{
        path: 'child1',
        component: Child1Component
      },
      {
        path: 'child2',
        component: Child2Component
      }]
    },
    { path: '',   redirectTo: 'gis.map', pathMatch: 'full' }
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
  export class GISRoutingModule { }
