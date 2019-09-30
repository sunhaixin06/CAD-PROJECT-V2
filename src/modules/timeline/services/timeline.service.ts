import { Injectable } from '@angular/core';
import { Http, Response, Jsonp, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
declare var $: any;
import { TimelineEvents } from './mock-timeline';
import { TimelineEvent } from './timeline';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TimelineService {

    dataList;
    lzbh;

    constructor(private http: Http) { }

    public setLzbh(id: string) {
        this.lzbh = id;
    }


    /**
	 * 根据事件ID获取所有时间轴事件
	 */
    public getEvents(id: string): any {
        const url = '../timelineservice/timelineQuery/queryRecordsByEventNum?lzbh=' + id;
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        return this.http.get(url, options);
    }

    /**
	 * 获取时间轴小事件
	 */
    public getTimelineEvent(id: string): any {
        const url = '../timelineservice/timelineQuery/queryRecordsById?id=' + id;
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        return this.http.get(url, options);
    }


    /**
    * 根据信息来源查询
	*/
    public queryRecordsByCondition(lzbh: string, gxdw: string[], xxfl: string[], xxly: string[], fjbh: string[]): any {
        let url = '../timelineservice/timelineQuery/queryRecordsByCondition?lzbh=' + lzbh;
        for (let i = 0; i < gxdw.length; i++) {
            url = url + '&unit[]=' + gxdw[i];
        }
        for (let i = 0; i < xxfl.length; i++) {
            url = url + '&infoSort[]=' + xxfl[i];
        }
        for (let i = 0; i < xxly.length; i++) {
            url = url + '&infoSource[]=' + xxly[i];
        }
        for (let i = 0; i < fjbh.length; i++) {
            url = url + '&attachmentType[]=' + fjbh[i];
        }
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        return this.http.get(url, options);
    }

    /**
	 * 根据关键词查询
	 */
    public queryrRecordsByKeyword(lzbh: string, keyword: string): any {
        const url = '../timelineservice/timelineQuery/queryRecordsByKeyword?lzbh=' + lzbh + '&keyword=' + keyword;
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        return this.http.get(url, options);
    }

    /**
	 * 获取所有相关单位
	 */
    public getGxdwList(lzbh:string): any {
        const url = '../timelineservice/basicDict/queryRelatedUnits?lzbh='+lzbh;
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        return this.http.get(url, options);
    }

    /**
	 * 获取所有信息分类
	 */
    public getXxflList(): any {
        const url = '../timelineservice/basicDict/queryInfoType';
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        return this.http.get(url, options);
    }

    /**
	 * 获取所有信息来源
	 */
    public getXxlyList(): any {
        const url = '../timelineservice/basicDict/queryInfoSource';
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        return this.http.get(url, options);
    }

    /**
	 * 获取所有附件包含
	 */
    public getFjbhList(): any {
        const url = '../timelineservice/basicDict/queryAttachmentType';
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        return this.http.get(url, options);
    }


	/**
	 * 插入时间轴数据
	 */
	public addTimelineEvent(){
//		const url = '../timelineservice/insertRecord/insert';
//      const headers = new Headers({ 'Content-Type': 'application/json' });
//      const options = new RequestOptions({ headers: headers });
//      this.http.get(url, options);
		$(".VivaTimeline").animate({scrollTop: $(".timeline").css("height")}, {duration: 500,easing: "swing"});
	}


    // private handleError(error: any): Promise<any> {
    // 	console.error('发生错误', error);
    // 	return Promise.reject(error.message || error);
    // }



}
