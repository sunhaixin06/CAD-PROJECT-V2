import {Component, OnInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'police-dispose',
  templateUrl: './policeDispose.component.html',
  styleUrls: ['./policeDispose.component.scss']
})
export class PoliceDisposeComponent implements OnInit, OnDestroy {
    tabs = ['推荐单位', '周边警力', '处警单位', '处警单元', '联动单位'];
    tabsIndex = 2;
    constructor(){}
    ngOnInit() {

    }
    switchTabs(index) {
        this.tabsIndex = index;
    }
    ngOnDestroy() {

    }
}