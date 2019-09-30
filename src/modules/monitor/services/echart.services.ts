import { Injectable } from '@angular/core';
import { Http, Response, Jsonp, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EchartService {

    constructor(private http: Http) { }

    /**
	 * 根据事件ID获取所有时间轴事件
	 */
    public getEchartData(system: string, id: string): any {
        const url = '../timelineservice/echartQuery/queryRecordsByEventNum?system=' + system + '&id=' + id;
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        return this.http.get(url, options);
    }

}
