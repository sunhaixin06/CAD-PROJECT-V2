import {Component, OnInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'selected-units',
  templateUrl: './selectedUnits.component.html',
  styleUrls: ['./selectedUnits.component.scss']
})
export class SelectedUnitsComponent implements OnInit, OnDestroy {
    listItems = ['浦东分局', '虹口分局', '徐汇分局', '黄浦分局', '处警单位', '处警单元'];
    constructor(){
    }
    ngOnInit() {

    }
    valueChange(value) {
        console.log('valueChange===', value);
    }
    filterChange(value) {
        console.log('filterChange===', value);
    }
    ngOnDestroy() {

    }
}