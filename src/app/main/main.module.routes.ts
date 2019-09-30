import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AppPage } from './pages/app.page';
import { PreloadingService } from './services/preloadingService';
import { IndexPageComponent } from '../../modules/component/index/index.component';
import { LoginPageComponent } from '../../modules/component/login/login.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'index',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginPageComponent
    },
    {
        path: 'index',
        loadChildren: '../../modules/component/index.module#IndexModule'
        // component: IndexPageComponent
    }
]

  @NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes,
        {
          enableTracing: true , // <-- debugging purposes only
          preloadingStrategy: PreloadingService,
          useHash: true
        }
      )
    ],
    exports: [
      RouterModule
    ]
  })
  export class MainModuleRouting { }
