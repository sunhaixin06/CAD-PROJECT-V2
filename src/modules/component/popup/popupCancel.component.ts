import {Component, OnInit, OnDestroy, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'popup-Cancel',
  templateUrl: './popupCancel.component.html',
  styleUrls: ['./popupCancel.component.scss']
})
export class PopupCancelComponent implements OnInit, OnDestroy {
  // @Output() popupCancelEvent = new EventEmitter<any>();
  public opened = false;
  public openeds = false;
  public policeLevel = 1; // 警情等级
  public value: Date = new Date();
  public listItems: Array<string> = ["X-Small", "Small", "Medium", "Large", "X-Large", "2X-Large"];
  constructor(){}
  ngOnInit(): void {
    // throw new Error("Method not implemented.");
  }
  ngOnDestroy(): void {
    // throw new Error("Method not implemented.");
  }

  public close(status) {
    console.log(`Dialog result: ${status}`);
    this.opened = false;

  }

  public open() {
    this.opened = true;

  }
  // 切换警情等级
  public switchPoliceLevel(index) {
      this.policeLevel = index;
  }

  public closes(status) {
    console.log(`Dialog result: ${status}`);
    this.openeds = false;

  }

  public opens() {
    this.openeds = true;

  }
}