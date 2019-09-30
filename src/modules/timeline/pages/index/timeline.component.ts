import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import { Observable, BehaviorSubject } from 'rxjs/Rx';
// import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/map';

declare var $: any;
import 'rxjs/add/operator/switchMap';
import { TimelineEvent } from '../../services/timeline';
import { TimelineService } from '../../services/timeline.service';
import { TimelineDetailsComponent } from '../../views/detail/timeline-details.component';
import { TimelineMp3Component } from '../../views/sound/timeline-mp3.component';
import { TimelineFujianComponent } from '../../views/file/timeline-fujian.component';
import { TimelineMapComponent } from '../../views/map/timeline-map.component';
import { TimelinePictureComponent } from '../../views/picture/timeline-picture.component';
import { TimelineVideoComponent } from '../../views/video/timeline-video.component';

import { DialogModule } from '@progress/kendo-angular-dialog';
import { DialogService, DialogRef, DialogCloseResult } from '@progress/kendo-angular-dialog';

@Component({
    selector: 'app-timeline',
    templateUrl: './timeline.component.html',
    styleUrls: ['./timeline.component.css']
})

export class TimelineComponent implements OnInit, AfterViewInit {

    incident_name;
    lzbh = '8cc2047e-16fe-427d-a4ba-c95778db9bcc';
    dataList;
    sjm;


    gxdw = [];
    xxfl = [];
    xxly = [];
    fjbh = [];

    gxdwList;
    xxflList;
    xxlyList;
    fjbhList;

    public result;

    @ViewChild('list') list;

    public source: Array<string> = [];

    public data: Array<string> = [];

    constructor(private timelineService: TimelineService,
        private dialogService: DialogService
    ) { }

    ngAfterViewInit() {
        const contains = value => s => s.toLowerCase().indexOf(value.toLowerCase()) !== -1;

        this.list.filterChange.asObservable().switchMap(value => Observable.from([this.source])
            .do(() => this.list.loading = true)
            .map((data) => data.filter(contains(value))))
            .subscribe(x => {
                this.data = x;
                this.list.loading = false;
            });
    }

    /**
	 * 初始化
	 */
    ngOnInit() {
        this.getEvents(this.lzbh);
        // this.getEvents("45f653c2-5f1e-4445-9ffe-d3ccba01be6d");
        // this.getEvents("6a394d0a-22dc-4355-9081-61f501b2795c");
        this.getGxdwList(this.lzbh);
        this.getXxflList();
        this.getXxlyList();
        this.getFjbhList();
    }

    /**
	 * 根据事件ID获取所有时间轴事件
	 */
    getEvents(id: string): void {
        this.timelineService.getEvents(id).map((rsp: Response) => {
            return rsp.json();
        }).subscribe((data) => {
            console.log('根据事件ID获取所有时间轴事件');
            console.log(data);
            this.dataList = data.dataStore;
            this.sjm = data.dataStore[0].sjm;
            this.lzbh = data.dataStore[0].lzbh;
        });
    }

    /**
	 * 点击时间轴事件标题事件
	 */
    getItem(id: string) {
        const dialogRef: DialogRef = this.dialogService.open({
            title: '时间轴详情',
            content: TimelineDetailsComponent,
            width: 450,
            minWidth: 250
        });

        const userInfo = dialogRef.content.instance;

        this.timelineService.getTimelineEvent(id).map((rsp: Response) => {
            return rsp.json();
        }).subscribe((data) => {
            console.log('点击时间轴事件标题事件');
            console.log(data);
            // userInfo.data = data.dataStore;
            userInfo.incident_name = data.dataStore.sjm;
            userInfo.datetime = data.dataStore.sj;
            userInfo.person = data.dataStore.czrxm;
            userInfo.leixing = data.dataStore.bs;
            userInfo.header = data.dataStore.title;
            userInfo.description = data.dataStore.content;
        });
    }

    /**
	 * 获取所有相关单位
	 */
    public getGxdwList(lzbh): any {
        this.timelineService.getGxdwList(lzbh).map((rsp: Response) => {
            return rsp.json();
        }).subscribe((data) => {
            console.log('所有相关单位');
            console.log(data);
            this.gxdwList = data.dataStore;
            for (let i = 0; i < data.dataStore.length; i++) {
                this.source.push(data.dataStore[i].dwm);
            }
        });
    }

    /**
	 * 获取所有信息分类
	 */
    public getXxflList(): any {
        this.timelineService.getXxflList().map((rsp: Response) => {
            return rsp.json();
        }).subscribe((data) => {
            console.log('所有信息分类');
            console.log(data);
            this.xxflList = data.dataStore;
            for (let i = 0; i < data.dataStore.length; i++) {
                this.source.push(data.dataStore[i].name);
            }
        });
    }


    /**
	 * 获取所有信息来源
	 */
    public getXxlyList(): any {
        this.timelineService.getXxlyList().map((rsp: Response) => {
            return rsp.json();
        }).subscribe((data) => {
            console.log('所有信息来源');
            console.log(data);
            this.xxlyList = data.dataStore;
            for (let i = 0; i < data.dataStore.length; i++) {
                this.source.push(data.dataStore[i].name);
            }
        });
    }


    /**
	 * 获取所有附件包含
	 */
    public getFjbhList(): any {
        this.timelineService.getFjbhList().map((rsp: Response) => {
            return rsp.json();
        }).subscribe((data) => {
            console.log('所有附件包含');
            console.log(data);
            this.fjbhList = data.dataStore;
            for (let i = 0; i < data.dataStore.length; i++) {
                this.source.push(data.dataStore[i].name);
            }
        });
    }


    OpenPicture(url) {
        const urlList = [];
        for (let i = 0; i < url.length; i++) {
            const item = url[i].fileurl + '/' + url[i].filename + '.' + url[i].extension;
            urlList.push(item);
        }

        const dialogRef: DialogRef = this.dialogService.open({
            title: '时间轴视频',
            content: TimelinePictureComponent,
            width: 1000,
            minWidth: 300
        });

        const userInfo = dialogRef.content.instance;
        userInfo.urlList = urlList;
    }

    OpenVideo(url) {
        const dialogRef: DialogRef = this.dialogService.open({
            title: '时间轴视频',
            content: TimelineVideoComponent,
            width: 450,
            minWidth: 250
        });

        const userInfo = dialogRef.content.instance;
        userInfo.urlList = url;
    }

    OpenMp3(url) {
        const dialogRef: DialogRef = this.dialogService.open({
            title: '时间轴音频',
            content: TimelineMp3Component,
            width: 450,
            minWidth: 250
        });

        const userInfo = dialogRef.content.instance;

        userInfo.urlList = url;
    }

    OpenMap(position) {
        const dialogRef: DialogRef = this.dialogService.open({
            title: '时间轴地图',
            content: TimelineMapComponent,
            width: 450,
            minWidth: 250
        });

        const userInfo = dialogRef.content.instance;
        userInfo.position = position;
    }

    OpenFujian(url) {
        const dialogRef: DialogRef = this.dialogService.open({
            title: '时间轴文件',
            content: TimelineFujianComponent,
            width: 450,
            minWidth: 250
        });

        const userInfo = dialogRef.content.instance;
        userInfo.urlList = url;
    }

    toggle1() {
        $('#s1').toggleClass('click1');
        $('#s2').removeClass('click1');
        $('#s3').removeClass('click1');
        $('#s4').removeClass('click1');
        $('#gxdw').toggle();
        $('#xxfl').hide();
        $('#xxly').hide();
        $('#fjbh').hide();
    }

    toggle2() {
        $('#s2').toggleClass('click1');
        $('#s1').removeClass('click1');
        $('#s3').removeClass('click1');
        $('#s4').removeClass('click1');
        $('#xxfl').toggle();
        $('#gxdw').hide();
        $('#xxly').hide();
        $('#fjbh').hide();
    }

    toggle3() {
        $('#s3').toggleClass('click1');
        $('#s1').removeClass('click1');
        $('#s2').removeClass('click1');
        $('#s4').removeClass('click1');
        $('#xxly').toggle();
        $('#gxdw').hide();
        $('#xxfl').hide();
        $('#fjbh').hide();
    }

    toggle4() {
        $('#s4').toggleClass('click1');
        $('#s1').removeClass('click1');
        $('#s2').removeClass('click1');
        $('#s3').removeClass('click1');
        $('#fjbh').toggle();
        $('#gxdw').hide();
        $('#xxfl').hide();
        $('#xxly').hide();
    }

    sousuo() {
        const keyword = $('.selectors-mohu input').val();
        this.timelineService.queryrRecordsByKeyword(this.lzbh, keyword).map((rsp: Response) => {
            return rsp.json();
        }).subscribe((data) => {
            console.log(data);
            this.dataList = data.dataStore;
        });
    }

    qingkong() {
        this.chongzhi1();
        this.chongzhi2();
        this.chongzhi3();
        this.chongzhi4();
        this.gxdw = [];
        this.xxfl = [];
        this.xxly = [];
        this.fjbh = [];
        $('#s1').text('干系单位▽').removeClass('checked');
        $('#s2').text('信息分类▽').removeClass('checked');
        $('#s3').text('信息来源▽').removeClass('checked');
        $('#s4').text('附件包含▽').removeClass('checked');
        $('.selectors-mohu input').val('');
        this.timelineService.queryrRecordsByKeyword(this.lzbh, '').map((rsp: Response) => {
            return rsp.json();
        }).subscribe((data) => {
            console.log(data);
            this.dataList = data.dataStore;
        });
    }

    shousuo() {
        if ($('#s1').hasClass('click1')) {
            this.toggle1();
        }
        if ($('#s2').hasClass('click1')) {
            this.toggle2();
        }
        if ($('#s3').hasClass('click1')) {
            this.toggle3();
        }
        if ($('#s4').hasClass('click1')) {
            this.toggle4();
        }
        $('.selectors-jingque').toggle();
        $('#shoufang img').toggleClass('img-down');
    }

    sel1(option) {
        $('#sela' + option).toggleClass('click');
    }

    sel2(option) {
        $('#selb' + option).toggleClass('click');
    }

    sel3(option) {
        $('#selc' + option).toggleClass('click');
    }

    sel4(option) {
        $('#seld' + option).toggleClass('click');
    }

    chongzhi1() {
        $('.option1').removeClass('click');
    }

    queding1() {
        this.gxdw = [];
        $('#s1').removeClass('click1');
        $('#s2').removeClass('click1');
        $('#s3').removeClass('click1');
        $('#gxdw').hide();
        $('#xxfl').hide();
        $('#xxly').hide();
        const list = $('#gxdw .selector-detail .option1');
        for (let i = 0; i < list.length; i++) {
           if ($('#gxdw .selector-detail .option1').eq(i).hasClass('click')) {
                let option = $('#gxdw .selector-detail .option1').eq(i).attr('id');
                option = option.substring(4);
                this.gxdw.push(option);
            }
        }
        if (this.gxdw.length > 1) {
            $('#s1').text($('#sela' + this.gxdw[0]).text() + '...');
            $('#s1').addClass('checked');
        } else if (this.gxdw.length === 1) {
            $('#s1').text($('#sela' + this.gxdw[0]).text());
            $('#s1').addClass('checked');
        } else {
            $('#s1').text('干系单位▽');
            $('#s1').removeClass('checked');
        }

        this.timelineService.queryRecordsByCondition(this.lzbh, this.gxdw, this.xxfl, this.xxly, this.fjbh).map((rsp: Response) => {
            return rsp.json();
        }).subscribe((data) => {
            console.log(data);
            this.dataList = data.dataStore;
        });

    }

    chongzhi2() {
        $('.option1').removeClass('click');
    }

    queding2() {
        this.xxfl = [];
        $('#s1').removeClass('click1');
        $('#s2').removeClass('click1');
        $('#s3').removeClass('click1');
        $('#gxdw').hide();
        $('#xxfl').hide();
        $('#xxly').hide();
        const list = $('#xxfl .selector-detail .option1');
        for (let i = 0; i < list.length; i++) {
            if ($('#xxfl .selector-detail .option1').eq(i).hasClass('click')) {
                let option = $('#xxfl .selector-detail .option1').eq(i).attr('id');
                option = option.substring(4);
                this.xxfl.push(option);
            }
        }
        if (this.xxfl.length > 1) {
            $('#s2').text($('#selb' + this.xxfl[0]).text() + '...');
            $('#s2').addClass('checked');
        } else if (this.xxfl.length === 1) {
            $('#s2').text($('#selb' + this.xxfl[0]).text());
            $('#s2').addClass('checked');
        } else {
            $('#s2').text('信息分类▽');
            $('#s2').removeClass('checked');
        }

        this.timelineService.queryRecordsByCondition(this.lzbh, this.gxdw, this.xxfl, this.xxly, this.fjbh).map((rsp: Response) => {
            return rsp.json();
        }).subscribe((data) => {
            console.log(data);
            this.dataList = data.dataStore;
        });
    }

    chongzhi3() {
        $('.option1').removeClass('click');
    }

    queding3() {
        this.xxly = [];
        $('#s1').removeClass('click1');
        $('#s2').removeClass('click1');
        $('#s3').removeClass('click1');
        $('#gxdw').hide();
        $('#xxfl').hide();
        $('#xxly').hide();
        const list = $('#xxly .selector-detail .option1');
        for (let i = 0; i < list.length; i++) {
            if ($('#xxly .selector-detail .option1').eq(i).hasClass('click')) {
                let option = $('#xxly .selector-detail .option1').eq(i).attr('id');
                option = option.substring(4);
                this.xxly.push(option);
            }
        }
        if (this.xxly.length > 1) {
            $('#s3').text($('#selc' + this.xxly[0]).text() + '...');
            $('#s3').addClass('checked');
        } else if (this.xxly.length === 1) {
            $('#s3').text($('#selc' + this.xxly[0]).text());
            $('#s3').addClass('checked');
        } else {
            $('#s3').text('信息来源▽');
            $('#s3').removeClass('checked');
        }
        this.timelineService.queryRecordsByCondition(this.lzbh, this.gxdw, this.xxfl, this.xxly, this.fjbh).map((rsp: Response) => {
            return rsp.json();
        }).subscribe((data) => {
            console.log(data);
            this.dataList = data.dataStore;
        });
    }

    chongzhi4() {
        $('.option1').removeClass('click');
    }

    queding4() {
        this.fjbh = [];
        $('#s4').removeClass('click1');
        $('#fjbh').hide();
        const list = $('#fjbh .selector-detail .option1');
        for (let i = 0; i < list.length; i++) {
            if ($('#fjbh .selector-detail .option1').eq(i).hasClass('click')) {
                let option = $('#fjbh .selector-detail .option1').eq(i).attr('id');
                option = option.substring(4);
                this.fjbh.push(option);
            }
        }

        if (this.fjbh.length > 1) {
            $('#s4').text($('#seld' + this.fjbh[0]).text() + '...');
            $('#s4').addClass('checked');
        } else if (this.fjbh.length === 1) {
            $('#s4').text($('#seld' + this.fjbh[0]).text());
            $('#s4').addClass('checked');
        } else {
            $('#s4').text('附件包含▽');
            $('#s4').removeClass('checked');
        }
        this.timelineService.queryRecordsByCondition(this.lzbh, this.gxdw, this.xxfl, this.xxly, this.fjbh).map((rsp: Response) => {
            return rsp.json();
        }).subscribe((data) => {
            console.log(data);
            this.dataList = data.dataStore;
        });
    }
}
