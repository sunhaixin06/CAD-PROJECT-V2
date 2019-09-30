import {Component, OnInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'left-phone',
  templateUrl: './leftPhone.component.html',
  styleUrls: ['./leftPhone.component.scss']
})
export class LeftPhoneComponent implements OnInit, OnDestroy {
    selectIndex = 1; // 报警人信息tab切换
    isHangUp = true; // 是否挂断状态
    constructor(){}
    ngOnInit() {

    }
    ngOnDestroy() {

    }
    switchTab(index) {
        this.selectIndex = index;
    }
    // 切换电话状态
    switchPhoneState() {
        this.isHangUp = !this.isHangUp;
    }
}
