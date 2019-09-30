import {Component, OnInit, OnDestroy, Output, EventEmitter} from '@angular/core';
import { policeUnits } from '../../../../resources/mock/policeUnits';

@Component({
  selector: 'popup-Maillist',
  templateUrl: './popupMaillist.component.html',
  styleUrls: ['./popupMaillist.component.scss']
})
export class PopupMaillistComponent implements OnInit, OnDestroy {
  // @Output() PopupMaillistEvent = new EventEmitter<any>();
  openeds = false;
  policeData = policeUnits;
  bottomBtnIndex = 0;
  constructor() {}
  ngOnInit(): void {
    // throw new Error("Method not implemented.");
  }
  ngOnDestroy(): void {
    // throw new Error("Method not implemented.");
  }
  switchBottomTab(index) {
      this.bottomBtnIndex = index;
  }
  selectCell(childIndex: number, flag: boolean, i: number){
    // console.log(this.policeChildData, childIndex);
    // switch(childIndex) {
    //     case 0:
    //     this.policeData[i].isSelect = flag;
    //     break;
    //     case 1:
    //     // break;
    //     case 2:
    //     // break;
    //     case 3:
    //     // break;
    //     case 4:
    //     // break;
    //     case 5:
    //     // break;
    //     this.policeChildData[childIndex - 1][i].isSelect = flag;
    //     break;
    //     default:
    //     break;
    // }
}
  public close(status) {
    console.log(`Dialog result: ${status}`);
    this.openeds = false;
  }

  public open() {
    this.openeds = true;
  }
}