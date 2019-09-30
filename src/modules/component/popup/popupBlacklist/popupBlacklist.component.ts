import {Component, OnInit, OnDestroy, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'popup-Blacklist',
  templateUrl: './popupBlacklist.component.html',
  styleUrls: ['./popupBlacklist.component.scss']
})
export class PopupBlacklistComponent implements OnInit, OnDestroy {
  // @Output() popupBlacklistEvent = new EventEmitter<any>();
  public openeds = false;
  public bottomBtnIndex = 0;
  constructor(){}
  ngOnInit(): void {
    // throw new Error("Method not implemented.");
  }
  ngOnDestroy(): void {
    // throw new Error("Method not implemented.");
  }
 
  switchBottomTab(index) {
    this.bottomBtnIndex = index;
  }

  public close(status) {
    console.log(`Dialog result: ${status}`);
    this.openeds = false;
  }

  public open() {
    this.openeds = true;
  }

}