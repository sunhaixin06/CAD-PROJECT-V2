import { Component } from '@angular/core';
import { MapService } from '../../services/map.services';

@Component({
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component {
  title = 'Child1组件';
  progress: number = 0;
  data: string[] = [];
  constructor(private mapService: MapService) {
    // this.data = this.mapService.getData();
    this.mapService._subject.subscribe(value => {
      this.data.push(value);
      console.log('订阅：' + value);
    });
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
}
