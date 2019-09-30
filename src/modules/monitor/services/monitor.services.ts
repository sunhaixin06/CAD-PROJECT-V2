import { Injectable } from '@angular/core';
import { Http, Response, Jsonp, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MonitorService {

    constructor(private http: Http) { }

    /**
	 * 获取所有系统及其IP
	 */
    public getSystemData(): any {
        const url = './logservice/logQuery/querySystemAll';
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        return this.http.get(url, options);
    }

}
