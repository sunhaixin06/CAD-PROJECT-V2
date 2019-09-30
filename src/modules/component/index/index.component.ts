import {Component, OnInit, OnDestroy} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'index-page',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexPageComponent implements OnInit, OnDestroy {
    isHuaWu = 2; // 底部按钮  非话务1  话务2
    userType = 1; // 用户，1用户页面 2通话页面
    chatType = 1; // 话务，1聊天列表 2聊天页面
    constructor(
        private router: Router
    ){}
    ngOnInit() {
        setTimeout(() => {
            this.userType = 2;
        }, 5000)
    }
    ngOnDestroy() {

    }
    switchHuaWu(val: number) {
        this.isHuaWu = val;
        console.log('val====', val);
        if (val === 2) {
            this.chatType = 1;
            // this.router.navigate(['/policeEdit']);
        } else {
            // this.router.navigate(['/policeList']);
        }
    }
    // 头部传来的事件
    headerEvent(data) {
        this.userType = 1;
    }
    // 聊天列表
    chatListEvent(data) {
        this.chatType = 2;
    }
    // 聊天页面
    chatPageEvent(data) {
        this.chatType = 1;
    }
}
