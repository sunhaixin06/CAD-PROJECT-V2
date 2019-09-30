import { Component, Input, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { GridDataResult, PageChangeEvent, CellClickEvent } from '@progress/kendo-angular-grid';
import { filterBy, FilterDescriptor, CompositeFilterDescriptor, distinct, SortDescriptor, orderBy } from '@progress/kendo-data-query';
import { mockData } from '../../../../resources/mock/mulLevel';


import {
    FilterService,
    // SinglePopupService, PopupCloseEvent
} from '@progress/kendo-angular-grid';

@Component({
    selector: 'lsjq',
    templateUrl: './lsjq.component.html',
    styleUrls: ['./lsjq.component.scss']
})
export class LsjqComponent implements OnInit, OnDestroy {

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

    public testData2 = [
        { name: "浦东分局", code: "001", parentCode: '' },
        { name: "川沙分局", code: "011", parentCode: '001' },
        { name: "新川路分局", code: "021", parentCode: '011' },
        { name: "新川路分局1", code: "121", parentCode: '021' },
        { name: "新川路分局2", code: "122", parentCode: '021' },
        { name: "城南路分局", code: "022", parentCode: '011' },
        { name: "东河浜分局", code: "023", parentCode: '011' },
        { name: "高桥分局", code: "012", parentCode: '001' },
        { name: "护塘街分局", code: "024", parentCode: '012' },
        { name: "镇北村分局", code: "025", parentCode: '012' },
        { name: "屯粮巷分局", code: "026", parentCode: '012' },
        { name: "北蔡分局", code: "013", parentCode: '001' },
        { name: "合庆分局", code: "014", parentCode: '001' },
        { name: "唐镇分局", code: "015", parentCode: '001' },
        { name: "青浦分局", code: "002", parentCode: '' },
        { name: "嘉定分局", code: "003", parentCode: '' },
        { name: "奉贤分局", code: "004", parentCode: '' },
        { name: "闵行分局", code: "005", parentCode: '' },
        { name: "宝山分局", code: "006", parentCode: '' },
        { name: "杨浦分局", code: "007", parentCode: '' },
        { name: "徐汇分局", code: "008", parentCode: '' }
    ];
    // 表单传值内容
    public info = {
        policeOfficeId: '浦东分局'
    };

    expandRowIndex = null;

    // 报警时间
    bjsj = '';

    // 警情状态
    ztType = mockData.ztType;
    ztValue = this.ztType[0];

    // 警情案由
    ayType = mockData.ayType;
    ayValue = this.ayType[0];

    // 所属单位
    ssdwType = mockData.ssdwType;
    ssdwValue = this.ssdwType[0];

    // 处置结果
    czjgType = mockData.czjgType;
    czjgValue = this.czjgType[0];

    policeLevel = 1; // 警情等级

    profileForm = new FormGroup({
        bjsj: new FormControl(''),
        zt: new FormControl(''),
        ay: new FormControl(''),
        ssdw: new FormControl(''),
        czjg: new FormControl(''),
        jb: new FormControl(''),
    });

    constructor(
        private route: ActivatedRoute,
        private router: Router) {
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
    // 切换警情等级
    switchPoliceLevel(index) {
        this.policeLevel = index;
    }

    dateChange(value) {
        console.log(this.bjsj);
    }

    onChangeCzjg(value) {
        console.log(value);
    }

    onChangeZt(value) {
        console.log(value);
    }

    onChangeSsdw(value) {
        console.log(value);
    }

    onChangeAy(value) {
        console.log(value);
    }

    queryData() {
        console.log("点击了查询");
    }

    reset() {
        console.log("点击了重置");
        this.profileForm.reset();
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
            let row = this.dataSource.filter((t, i) => {
                if (i == rowIndex)
                    return t;
            });
            this.router.navigate(['/policeDetail', row[0].Category.bjdh]);
        }
    }

    getDominionUnit(name) {
        this.info.policeOfficeId = name;
    }
}