import {Component, OnInit, OnDestroy, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'popup-Takeover',
  templateUrl: './popupTakeover.component.html',
  styleUrls: ['./popupTakeover.component.scss']
})
export class PopupTakeoverComponent implements OnInit, OnDestroy {
  // @Output() popupTakeoverEvent = new EventEmitter<any>();
  public openeds = false;
  public takeIndex = 1;
  public Takelist: Array<{ img: string,text: string, id: number , value: number, position: string, stamun: string}> = [
    { img: "../../../../resources/images/head/03.svg",text: "余敏", id: 1 , value: 203948, position: "班长", stamun: "1号台"},
    { img: "../../../../resources/images/head/03.svg",text: "余敏1", id: 2 , value: 203949, position: "接管员", stamun: "2号台"},
    { img: "../../../../resources/images/head/03.svg",text: "余敏2", id: 3 , value: 203950, position: "班长", stamun: "3号台"},
    { img: "../../../../resources/images/head/03.svg",text: "余敏3", id: 4 , value: 203951, position: "班长", stamun: "4号台"},
    { img: "../../../../resources/images/head/03.svg",text: "余敏4", id: 5 , value: 203952, position: "班长", stamun: "5号台"},
    { img: "../../../../resources/images/head/03.svg",text: "余敏6", id: 6 , value: 203953, position: "班长", stamun: "6号台"},
    { img: "../../../../resources/images/head/03.svg",text: "余敏7", id: 7 , value: 203954, position: "班长", stamun: "9号台"},
    { img: "../../../../resources/images/head/03.svg",text: "余敏8", id: 8 , value: 203955, position: "班长", stamun: "12号台"},
    { img: "../../../../resources/images/head/03.svg",text: "余敏9", id: 9 , value: 203956, position: "班长", stamun: "7号台"},
];
  constructor(){}
  ngOnInit(): void {
    // throw new Error("Method not implemented.");
  }
  ngOnDestroy(): void {
    // throw new Error("Method not implemented.");
  }
  takelistSwitch(id){
     this.takeIndex = id;
  }
  public close(status) {
    console.log(`Dialog result: ${status}`);
    this.openeds = false;
  }

  public open() {
    this.openeds = true;
  }

}