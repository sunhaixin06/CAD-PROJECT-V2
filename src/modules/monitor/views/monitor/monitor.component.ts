import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MonitorService } from '../../services/monitor.services';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.css']
})
export class MonitorComponent implements OnInit  {
  title = 'Monitor入口组件';

  gridData: any[];

  constructor(private monitorService: MonitorService, private router: Router) { }

  ngOnInit() {
    // this.monitorService.getSystemData().map((rsp: Response) => {
    //   return rsp.json();
    // }).subscribe((data) => {
    //   console.log(data);
    //   this.gridData = data.dataStore;
    // });
  }

  EnterSystemLog() {
    // alert('进入系统日志');
    this.router.navigateByUrl('grid');
  }

  EnterBusinessLog() {
    alert('进入业务日志');
  }

}
