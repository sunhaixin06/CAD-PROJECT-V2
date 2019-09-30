import { Component, NgZone, OnInit, SimpleChanges, OnChanges, DoCheck,
   AfterContentInit,
   AfterContentChecked,
   AfterViewInit,
   AfterViewChecked,
   OnDestroy} from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core/src/change_detection/constants';


@Component({
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
 AfterViewInit, AfterViewChecked, OnDestroy {
  ngOnDestroy(): void {
    console.log('ngOnDestroy 被执行.');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked 被执行.');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit 被执行.');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked 被执行.');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit 被执行.');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck 被执行.');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges 被执行.');

  }
  ngOnInit(): void {
    console.log('ngOnInit 被执行.');
  }
  title = 'Child2组件';
  progress: number = 0;
  constructor(private zone: NgZone) {
    console.log('constructor 被执行.');
  }

  processWithinAngularZone() {
    this.progress = 0;
    this.increaseProgress(() => console.log('Done!'));
  }

  increaseProgress(doneCallback: () => void) {
    this.progress += 1;
    console.log(`Current progress: ${this.progress}%`);

    if (this.progress < 100) {
      window.setTimeout(() => {
        this.increaseProgress(doneCallback);
      }, 10);
    } else {
      doneCallback();
    }
  }

  processOutsideAngularZone() {
    this.progress = 0;
    this.zone.runOutsideAngular(() => {
      this.increaseProgress(() => {
        this.zone.run(() => {
          console.log('Outside Done!');
        });
      });
    });
  }
}
