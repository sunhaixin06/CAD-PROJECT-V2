import { Injectable } from '@angular/core';
import { Http, Response, Jsonp, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GridService {

    params = {
        systemName: '',
        systemIp: '',
        logType: '',
        sort: [],
        keyword: '',
        logLevel: [],
        beginDate: '',
        endDate: ''
    };

    constructor(private http: Http) { }

    /**
	 * 获取指定系统和IP的系统日志
	 */
    public getSystemLogGridData(systemName: string, systemIp: string): any {
        const url = '../logservice/logQuery/querySystemLogAll?systemName=' + systemName + '&systemIp=' + systemIp;
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        return this.http.get(url, options);
    }

    // public getDataByPage(systemName: string, systemIp: string, logType: string,
    //     pageNo, pageSize, sort, keyword, logLevel, starttime, endtime): any {
    //         const url = '../logservice/logQuery/queryLogsByCondition';
    //         this.params.systemName = systemName;
    //         this.params.systemIp = systemIp;
    //         this.params.logType = logType;
    //         this.params.page = pageNo;
    //         this.params.pageSize = pageSize;
    //         this.params.sort = sort;
    //         this.params.keyword = keyword;
    //         this.params.logLevel = logLevel;
    //         this.params.beginDate = starttime;
    //         this.params.endDate = endtime;
    //         return this.http.post(url, this.params);
    // }

    // public getDataCount2(systemName: string, systemIp: string, logType: string,
    //     sort, keyword, logLevel, starttime, endtime): any {
    //         const url = '../logservice/logQuery/queryLogsCount';
    //         this.params.systemName = systemName;
    //         this.params.systemIp = systemIp;
    //         this.params.logType = logType;
    //         this.params.sort = sort;
    //         this.params.keyword = keyword;
    //         this.params.logLevel = logLevel;
    //         this.params.beginDate = starttime;
    //         this.params.endDate = endtime;
    //         return this.http.post(url, this.params);
    // }

    public getSystemLogGridDataByPage(systemName: string, systemIp: string, logType: string,
        pageNo , pageSize, sort, keyword, logLevel, starttime, endtime): any {
        let url = '../logservice/logQuery/queryLogsByCondition?systemName=' + systemName
                  + '&systemIp=' + systemIp + '&logType=' + logType + '&page=' + pageNo + '&pageSize=' + pageSize;
        if (sort.length !== 0) {
            if (sort[0].dir !== undefined) {
                url = url + '&field=' + sort[0].field + '&dir=' + sort[0].dir;
            }
        }
        if (keyword !== '') {
            url = url + '&keyword=' + keyword;
        }
        if (starttime !== '') {
            url = url + '&beginDate=' + starttime;
        }
        if (endtime !== '') {
            url = url + '&endDate=' + endtime;
        }
        for (let i = 0; i < logLevel.length; i++) {
            url = url + '&logLevel[]=' + logLevel[i];
        }
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        console.log(url);
        return this.http.get(url, options);
    }

    public getDataCount(systemName: string, systemIp: string, logType: string, keyword, logLevel, starttime, endtime): any {
        let url = '../logservice/logQuery/queryLogsCount?systemName=' + systemName
                + '&systemIp=' + systemIp + '&logType=' + logType;
        if (keyword !== '') {
            url = url + '&keyword=' + keyword;
        }
        if (starttime !== '') {
            url = url + '&beginDate=' + starttime;
        }
        if (endtime !== '') {
            url = url + '&endDate=' + endtime;
        }
        for (let i = 0; i < logLevel.length; i++) {
            url = url + '&logLevel[]=' + logLevel[i];
        }
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        console.log(url);
        return this.http.get(url, options);
    }


    /**
	 * 获取指定系统和IP的系统业务日志
	 */
    public getBusinessLogGridData(systemName: string, systemIp: string): any {
        const url = '../logservice/logQuery/queryBusinessLogAll?systemName=' + systemName + '&systemIp=' + systemIp;
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        return this.http.get(url, options);
    }


    /**
	 * 获取指定系统和IP的系统业务日志(关键词)
	 */
    public getDataByKeyword(systemName: string, systemIp: string, logType: string, keyword: string): any {
        const url = '../logservice/logQuery/queryLogsByCondition?systemName='
                  + systemName + '&systemIp=' + systemIp + '&logType=' + logType + '&keyword=' + keyword;
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        return this.http.get(url, options);
    }

    /**
	 * 获取指定系统和IP的系统业务日志(日志等级)
	 */
    public getDataByLogLeval(systemName: string, systemIp: string, logType: string, logLevel: string[]): any {
        let url = '../logservice/logQuery/queryLogsByCondition?systemName='
        + systemName + '&systemIp=' + systemIp + '&logType=' + logType ;
        for (let i = 0; i < logLevel.length; i++) {
            url = url + '&logLevel[]=' + logLevel[i];
        }
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        console.log(url);
        return this.http.get(url, options);
    }

    /**
	 * 获取指定系统和IP的系统业务日志(时间区间)
	 */
    public getDataByTime(systemName: string, systemIp: string, logType: string, starttime: string, endtime: string): any {
        const url = '../logservice/logQuery/queryLogsByCondition?systemName='
                + systemName + '&systemIp=' + systemIp + '&logType=' + logType + '&beginDate=' + starttime + '&endDate=' + endtime;
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        return this.http.get(url, options);
    }

}
