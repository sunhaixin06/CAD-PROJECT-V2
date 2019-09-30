import { Component, OnInit, Inject } from '@angular/core';
import { products } from './product';
import { State, process } from '@progress/kendo-data-query';
import { ExcelExportData } from '@progress/kendo-angular-excel-export';
import { GridService } from '../../services/grid.services';
import { ActivatedRoute } from '@angular/router';
import { DataStateChangeEvent, GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
declare var $: any;
import { DialogService, DialogRef, DialogCloseResult } from '@progress/kendo-angular-dialog';
import { MonitorComponent } from '../monitor/monitor.component';

@Component({
  templateUrl: './systemLogGrid.component.html',
  styleUrls: ['./systemLogGrid.component.css']
})
export class SystemLogGridComponent implements OnInit {

  systemName;
  systemIp;
  logType = 'systemLog';
  state: State = {
    skip: 0,
    take: 100,
    sort: []
  };
  keyword = '';
  logList = [];
  starttime = '';
  endtime = '';

  public startvalue: Date;
  public endvalue: Date;

  public gridView: GridDataResult = {
    data: [],
    total: 100000
  };

  public logLevalList: string[] = ['info', 'trace', 'debug', 'error'];

  constructor(private gridService: GridService,
    private activeRouter: ActivatedRoute,
    private dialogService: DialogService) {
  }

  ngOnInit(): void {
      this.activeRouter.queryParams.subscribe(params => {
        this.systemName = params.systemName;
        this.systemIp = params.systemIp;
      });
      this.loadItems();
  }

  public dataStateChange(state: DataStateChangeEvent): void {
    console.log(state);
    this.state = state;
    this.loadItems();
  }

  private loadItems(): void {
    const pageNo = this.state.skip / this.state.take + 1;
    this.gridService.getSystemLogGridDataByPage(
      this.systemName, this.systemIp, this.logType, pageNo, this.state.take, this.state.sort,
      this.keyword, this.logList, this.starttime, this.endtime)
    .map((rsp: Response) => {
      return rsp.json();
    }).subscribe((data) => {
      console.log('获取' + this.systemName + '系统 IP为' + this.systemIp + '的系统日志信息');
      console.log(data);
      this.gridView.data = data.dataStore;
    });
    this.gridService.getDataCount(this.systemName, this.systemIp, this.logType,
      this.keyword, this.logList, this.starttime, this.endtime).map((rsp: Response) => {
        return rsp.json();
      }).subscribe((data) => {
        console.log('获取' + this.systemName + '系统 IP为' + this.systemIp + '的系统日志条数');
        console.log(data);
        this.gridView.total = data.dataStore;
      });
  }

  sousuo() {
    if (this.startvalue != null && this.endvalue != null && this.startvalue > this.endvalue) {
      alert('截止时间早于起始时间，请重新填写。');
    } else {
      this.keyword = $('.selectors-mohu input').val();
      this.state = {
        skip: 0,
        take: 100,
        sort: []
      };
      this.starttime = $('#starttime input').attr('aria-valuetext');
      this.endtime = $('#endtime input').attr('aria-valuetext');
      this.loadItems();
    }
  }

  shousuo() {
    $('#logLeval').hide();
    $('.selectors-jingque').toggle();
    $('#shoufang img').toggleClass('img-down');
  }

  qingkong() {
    $('.selectors-mohu input').val('');
    $('#s1').text('日志等级').removeClass('checked');
    this.chongzhi();
    this.state = {
      skip: 0,
      take: 100,
      sort: []
    };
    this.startvalue = null;
    this.endvalue = null;
    this.starttime = '';
    this.endtime = '';
    this.keyword = '';
    this.logList = [];
    this.loadItems();
  }

  logLeval() {
    $('#logLeval').toggle();
  }

  sel(option) {
    $('#sel' + option).toggleClass('click');
  }

  chongzhi() {
    $('.option1').removeClass('click');
  }

  queding() {
    this.state = {
      skip: 0,
      take: 100,
      sort: []
    };
    this.logList = [];
    $('#logLeval').hide();
    const list = $('#logLeval .selector-detail .option1');
    for (let i = 0; i < list.length; i++) {
        if ($('#logLeval .selector-detail .option1').eq(i).hasClass('click')) {
            let option = $('#logLeval .selector-detail .option1').eq(i).attr('id');
            option = option.substring(3);
            this.logList.push(option);
        }
    }
    if (this.logList.length > 1) {
        $('#s1').text($('#sel' + this.logList[0]).text() + '...');
        $('#s1').addClass('checked');
    } else if (this.logList.length === 1) {
        $('#s1').text($('#sel' + this.logList[0]).text());
        $('#s1').addClass('checked');
    } else {
        $('#s1').text('日志等级');
        $('#s1').removeClass('checked');
    }
    this.loadItems();
  }

}
