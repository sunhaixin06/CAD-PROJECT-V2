import { Component, Input, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { GridDataResult, PageChangeEvent, CellClickEvent } from '@progress/kendo-angular-grid';
import { filterBy, FilterDescriptor, CompositeFilterDescriptor, distinct, SortDescriptor, orderBy } from '@progress/kendo-data-query';


import {
    FilterService,
    // SinglePopupService, PopupCloseEvent
} from '@progress/kendo-angular-grid';

@Component({
    selector: 'wdjq',
    templateUrl: './wdjq.component.html',
    styleUrls: ['./wdjq.component.scss']
})
export class WdjqComponent implements OnInit, OnDestroy {

    @Input()
    private dataSource: any;
    @Input()
    private gHeight: Number;

    private skip = 0;

    private pageSize = 12;

    public data: Array<{ text: string, value: number }>;

    public filter: CompositeFilterDescriptor;
    public gridData: any[] = filterBy(this.dataSource, this.filter);
    // public categories: any[] = distinct(this.dataSource, 'CategoryID').map(item => item.Category);
    public sort: SortDescriptor[] = [{ // 排序的字段
        field: 'zt',
        dir: 'asc'
    }];
    public source: Array<{ text: string, value: number }> = [
        { text: "Small", value: 1 },
        { text: "Medium", value: 2 },
        { text: "Large", value: 3 }
    ];
    expandRowIndex = null;

    constructor(
        private route: ActivatedRoute,
        private router: Router ) {

    }
    ngOnInit() {

    }

    ngOnDestroy() {

    }
    // 动态给表格的行添加class
    rowCallback(context) {
        const isEven = context.index % 2 == 0;
        return {
            even: isEven,
            odd: !isEven
        };
    }
    private onCellClick(event: CellClickEvent): void {
        let rowIndex = event.rowIndex;
        if (this.expandRowIndex === rowIndex) {
            this.expandRowIndex = null;
            event.sender.collapseRow(rowIndex);
            return;
        }
        for (let i = 0; i < event.sender.pageSize; i++) {
            event.sender.collapseRow(i);
        }
        this.expandRowIndex = rowIndex;
        event.sender.expandRow(rowIndex);
    }

    public pageChange(event: PageChangeEvent): void {
        this.skip = event.skip;
        this.loadMore();
    }
    private loadMore(): void {
        const next = this.dataSource.length;
        this.dataSource = [
            ...this.dataSource,
            ...this.dataSource.slice(0, next + 5)
        ];
    }
    // 排序事件
    public sortChange(sort: SortDescriptor[]): void {
        this.sort = sort;
        this.loadProducts();
    }
    private loadProducts(): void {
        this.dataSource = orderBy(this.dataSource, this.sort);
    }

    handleFilter(value) {
        this.data = this.source.filter((s) => s.text.toLowerCase().indexOf(value.toLowerCase()) !== -1);
    }
    public filterChange(filter: CompositeFilterDescriptor): void {
        this.filter = filter;
        this.gridData = filterBy(this.dataSource, filter);
    }

    public distinctPrimitive(fieldName: string): any {
        return distinct(this.dataSource, fieldName).map(item => item[fieldName]);
    }

    dblClickEvent(event) {
        let rowIndex;
        if (event.path) { // works on chrome and all browsers supporting path property in mouseevent
            rowIndex = event.path[1].rowIndex;
        } else { // should work on all browsers
            rowIndex = event.target.parentElement.rowIndex;
        }

        if (typeof rowIndex === 'number' && rowIndex < this.dataSource.length) {
            // do something
            let row = this.dataSource.filter((t,i) => {
                if(i == rowIndex)
                    return t;
            });
            this.router.navigate(['/policeDetail', row[0].Category.bjdh]);
        }
    }
}