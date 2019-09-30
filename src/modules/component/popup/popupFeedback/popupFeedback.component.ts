import {Component, OnInit, OnDestroy, Output, EventEmitter} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'popup-Feedback',
  templateUrl: './popupFeedback.component.html',
  styleUrls: ['./popupFeedback.component.scss']
})
export class PopupFeedbackComponent implements OnInit, OnDestroy {
  // @Output() PopupFeedbackEvent = new EventEmitter<any>();
  public openeds = false;
  public policeLevel = 1; // 警情等级
  constructor(
    private route: ActivatedRoute,
    private router: Router ) {

}
  ngOnInit(): void {
    // throw new Error("Method not implemented.");
  }
  ngOnDestroy(): void {
    // throw new Error("Method not implemented.");
  }

  public close(status) {
    console.log(`Dialog result: ${status}`);
    this.openeds = false;
  }

  public open() {
    this.openeds = true;
  }

   // 切换警情等级
   public switchPoliceLevel(index) {
      this.policeLevel = index;
  }
}