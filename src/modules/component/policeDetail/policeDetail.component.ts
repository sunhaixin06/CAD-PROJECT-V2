import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { shuju } from '../../../resources/mock/shuju';
@Component({
    selector: 'police-detail',
    templateUrl: './policeDetail.component.html',
    styleUrls: ['./policeDetail.component.scss']
})



export class PoliceDetailComponent implements OnInit, OnDestroy {
    public anjianData: Array<{ text: string, value: number }> = [
        {
            text: '案件：大木桥路67号（103948103813）',
            value: 1
        },
        {
            text: '案件：大木桥路68号（103948103814）',
            value: 2
        }
    ];

    public listDs = shuju;

    bottomBtnIndex = 0; // 底部的tab切换
    anjianValue = this.anjianData[0];
    activeIndex = 1;
  
    // 显示时间轴列表
    isShowTimeLine = false;
    isSHowLineDetail = false;
    isShowJingqing =false;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
    ) { }
    ngOnInit() {
        let id = this.route.snapshot.paramMap.get('id');
        console.log('id::::::::::::::::::::::::' + id);
    }
    // 显示时间轴弹窗
    showTimeLine(event, flag) {
        event.stopPropagation();
        this.isShowTimeLine = flag;
    }
    // 显示时间轴详情
    showLineDetail(event, flag) {
        event.stopPropagation();
        this.isSHowLineDetail = flag;
    }
    showJingqing(){
        event.stopPropagation();
        this.isShowJingqing = !this.isShowJingqing;
    }
        // 切换底部的tab
        switchBottomTab(index) {
            this.bottomBtnIndex = index;
        }

    // 案件
    onChangeAnjian(value) {
        console.log('value==', value);
    }
    @HostListener('document:click', ['$event'])
    public documentClick(event: any): void {
        console.log('document-click');
        this.isShowTimeLine = false;
        this.isSHowLineDetail = false;
    }
    ngOnDestroy() {

    }

    itemClick(index)  {
        this.listDs[index].isShrink = !this.listDs[index].isShrink;
    }

}

