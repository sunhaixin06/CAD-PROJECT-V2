import {Component, OnInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'left-user',
  templateUrl: './leftUser.component.html',
  styleUrls: ['./leftUser.component.scss']
})
export class LeftUserComponent implements OnInit, OnDestroy {
    selectIndex = 1; // tab切换
    tabsArr1 = [
        {
            name: '未保存',
            value: 8
        },
        {
            name: '排队列表',
            value: 43
        },
        {
            name: '早释',
            value: 6
        }
    ];
    tabsArr2 = [
        {
            name: '未保存',
            value: 8
        },
        {
            name: '排队列表',
            value: 43
        },
        {
            name: '早释',
            value: 8
        },
        {
            name: '背景信息',
            value: 7
        }
    ];
    tabsArr = this.tabsArr1;
    constructor(){}
    ngOnInit() {

    }
    ngOnDestroy() {

    }
    testTab() {
        this.tabsArr = this.tabsArr == this.tabsArr1 ? this.tabsArr2 : this.tabsArr1;
    }
    switchTab(index) {
        this.selectIndex = index;
    }
}