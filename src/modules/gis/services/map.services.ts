import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class MapService {
    data: string[] = [];
    count: number = 0;
    _subject: Subject<any>;

  constructor() {
    setInterval(() => this.buidData(), 5000);
    this._subject = new Subject<any>();
  }
  buidData() {
      this.count++;
      let t = 'data' + this.count;
      this.data.push(t);
      console.log('当前数据个数：' + this.data.length);
      this._subject.next(t);
      console.log('发布数据：' + t);
  }

  getData() {
    return this.data;
  }
}
