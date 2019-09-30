import {Component, OnInit, OnDestroy} from '@angular/core';
import { policeUnits } from '../../../../../resources/mock/policeUnits';

@Component({
  selector: 'police-units',
  templateUrl: './policeUnits.component.html',
  styleUrls: ['./policeUnits.component.scss']
})
export class PoliceUnitsComponent implements OnInit, OnDestroy {
    policeData = policeUnits; // 数据
    childIndex = 0; // 父级选中的索引值。
    policeChildData = [[], [], [], [], []]; // 子级数据集 默认最多5级
    policeSelectAll = [true, false, false, false, false];
    constructor(){
    }
    ngOnInit() {

    }
    selectCell(childIndex: number, flag: boolean, i: number){
        console.log(this.policeChildData, childIndex);
        switch(childIndex) {
            case 0:
            this.policeData[i].isSelect = flag;
            break;
            case 1:
            // break;
            case 2:
            // break;
            case 3:
            // break;
            case 4:
            // break;
            case 5:
            // break;
            this.policeChildData[childIndex - 1][i].isSelect = flag;
            break;
            default:
            break;
        }
    }
    // 全选
    selectCellAll(index: number, flag: boolean){
        this.policeSelectAll[index] = flag;
        console.log(index, flag, this.policeSelectAll[index]);
        for(let i=0;i<this.policeChildData[index].length;i++){
            this.policeChildData[index][i].isSelect = flag;
        }
    }
    // 展开
    expand(childIndex: number, data: Array<any>){
        switch(childIndex) {
            case 0:
            this.policeChildData = [[], [], [], [], []]; // 每次都需先重置数组
            this.policeChildData[0] = data;
            break;
            case 1:
            this.policeChildData = [this.policeChildData[0], [], [], [], []]; // 每次都需先重置数组
            this.policeChildData[1] = data;
            break;
            case 2:
            this.policeChildData[3] = [];
            this.policeChildData[4] = [];
            this.policeChildData[2] = data;
            break;
            case 3:
            this.policeChildData[4] = [];
            this.policeChildData[3] = data;
            break;
            case 4:
            this.policeChildData[4] = data;
            break;
            default:
            break;
        }
    }
    ngOnDestroy() {

    }
}