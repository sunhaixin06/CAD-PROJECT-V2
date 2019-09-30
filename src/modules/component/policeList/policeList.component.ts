import { Component, OnInit, OnDestroy } from '@angular/core';
import { filterBy, FilterDescriptor, CompositeFilterDescriptor, distinct, SortDescriptor, orderBy } from '@progress/kendo-data-query';
import { GridDataResult, PageChangeEvent, CellClickEvent } from '@progress/kendo-angular-grid';
// import { CommonService } from 'src/modules/service/common.service';
import { policeLists } from '../../../resources/mock/policeList';
import { mockData } from '../../../resources/mock/mulLevel';


@Component({
    selector: 'police-list',
    templateUrl: './policeList.component.html',
    styleUrls: ['./policeList.component.scss']
})
export class PoliceListComponent implements OnInit, OnDestroy {
    public pageSize = 15;
    public skip = 0;
    selectIndex = 0;
    // 表格默认高度
    gHeight = 910;
    expandRowIndex = null;
    private searchStr: String;
    public source: Array<{ text: string, value: number }> = [
        { text: "Small", value: 1 },
        { text: "Medium", value: 2 },
        { text: "Large", value: 3 }
    ];

    public data: Array<{ text: string, value: number }>;

    public filter: CompositeFilterDescriptor;
    public gridData: any[] = filterBy(policeLists, this.filter);
    // public categories: any[] = distinct(policeLists, 'CategoryID').map(item => item.Category);
    // public sort: SortDescriptor[] = [{ // 排序的字段
    //     field: 'zt',
    //     dir: 'asc'
    // }];


    constructor() {
        this.data = this.source.slice();
    }
    ngOnInit() {

    }
    // handleFilter(value) {
    //     this.data = this.source.filter((s) => s.text.toLowerCase().indexOf(value.toLowerCase()) !== -1);
    // }
    // public filterChange(filter: CompositeFilterDescriptor): void {
    //     this.filter = filter;
    //     this.gridData = filterBy(policeLists, filter);
    // }

    // public distinctPrimitive(fieldName: string): any {
    //     return distinct(policeLists, fieldName).map(item => item[fieldName]);
    // }
    ngOnDestroy() {

    }
    onClickHandle(val) {
        console.log('vale====', val);
    }
    switchSelect(index) {
        this.selectIndex = index;
        switch (index) {
            case 0:
                this.gHeight = 910;
                break;
            case 1:
                this.gHeight = 820;
                break;
            default:
                break;
        }
    }
    doSearch() {
        if (undefined === this.searchStr)
            return;;
        console.log(this.searchStr);
    }
    clear() {
        this.searchStr = "";
    }

}
