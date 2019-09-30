import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexPageComponent } from './index/index.component';
import { PoliceListComponent } from './policeList/policeList.component';
import { PoliceDetailComponent } from './policeDetail/policeDetail.component';
import { EditPoliceComponent } from './editPolice/editPolice.component';
import { PopupCancelComponent } from './popup/popupCancel.component';
  
const indexRoutes: Routes = [
    {
        path: '',
        component: IndexPageComponent,
        children: [
            {
                path: '',
                redirectTo: 'policeEdit',
                pathMatch: 'full'
            },
            {
                path: 'policeList',
                component: PoliceListComponent
            },
            {
                path: 'policeDetail/:id',
                component: PoliceDetailComponent // , canDeactivate: [CanPoliceDeactivate]
            },
            {
                path: 'policeEdit',
                component: EditPoliceComponent
            },
            {
                path: 'popupPage',
                component: PopupCancelComponent
            }
        ],
    }
];
 
@NgModule({
  imports: [
    RouterModule.forChild(indexRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class IndexPageRoutingModule { }