import {Component, OnInit, OnDestroy} from '@angular/core';
import { policeCell } from '../../../../../resources/mock/policeCell';

@Component({
  selector: 'police-cell',
  templateUrl: './policeCell.component.html',
  styleUrls: ['./policeCell.component.scss']
})
export class PoliceCellComponent implements OnInit, OnDestroy {
    public listItems: Array<{ text: string, value: number }> = [
        {
            text: '全部单元',
            value: 0
        },
        {
            text: '处置单元1',
            value: 1
        },
        {
            text: '处置单元2',
            value: 2
        }
    ];
    public selectedValue = this.listItems[0];
    public cellDatas = policeCell;
    constructor(){
    }
    ngOnInit() {

    }
    /**
     * 选中和取消选中
     * @param flag 是否要选中
     * @param index 要选中的下标
     */
    selectCell(flag, index){
        this.cellDatas[index]['isSelect'] = flag;
    }
    ngOnDestroy() {

    }
}