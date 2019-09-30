import {Component, OnInit, OnDestroy, Output, EventEmitter} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'header-page',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
    @Output() headerEvent = new EventEmitter<any>();
    stayRoute = '/policeEdit'; // 当前路由 policeList/policeDetail
    constructor(
        private router: Router
    ){}
    ngOnInit() {
        this.addListenRouter();
    }
    /**
     * 监听路由的变化
     */
    addListenRouter(){
        this.router.events
        .filter((event) => event instanceof NavigationEnd)
        .subscribe((event:NavigationEnd) => {
            // 获取激活的路由
            console.log('event.urlAfterRedirects==', event.urlAfterRedirects);
            this.stayRoute = event.urlAfterRedirects;
        });
    }
    userDetail() {
        this.headerEvent.emit(1);
    }
    ngOnDestroy() {

    }
}