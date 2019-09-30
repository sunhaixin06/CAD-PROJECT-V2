import {Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { mockData } from '../../../resources/mock/mulLevel';
import { testFromFunc } from '../../../resources/config/testForm';

@Component({
  selector: 'edit-police',
  templateUrl: './editPolice.component.html',
  styleUrls: ['./editPolice.component.scss']
})
export class EditPoliceComponent implements OnInit, OnDestroy {
    
    @ViewChild('tagInput') input;
    selectIndex = 0;
    isSelectSecr = false; // 是否隐私保护
    sexSelected = 0; // 性别选中  0男 1女
    policeLevel = 1; // 警情等级
    bottomBtnIndex = 0; // 底部的tab切换
    showBiaoZhiWu = false; // 是否显示标志物输入框
    public suosufenjuData: Array<{ text: string, value: number, child: Array<{text: string, value: number}> }> = mockData.mulLevels;
    suosufenjuValue = this.suosufenjuData[0];
    public guanxiadanweiData: Array<{ text: string, value: number }> = this.suosufenjuData[0].child;
    guanxiadanweiValue = this.guanxiadanweiData[0];
    // 来话类别
    laihuaType = mockData.laihuaType;
    liahuaValue = this.laihuaType[0];
    // 案由
    public anyouFir = mockData.anyouLevel;
    public anyouSec = this.anyouFir[0].child;
    public anyouThi = this.anyouSec[0].child;
    anyouFirValue = this.anyouFir[0]; 
    anyouSecValue = this.anyouSec[0]; 
    anyouThiValue = this.anyouThi[0]; 

    public source: Array<{ text: string, value: number }> = [
        { text: "Small", value: 1 },
        { text: "Medium", value: 2 },
        { text: "Large", value: 3 }
    ];

    public data: Array<{ text: string, value: number }>;

    isAddTag = false; // 是否正在新增标签
    tagsArr = ['沪AL2948']; // 车牌标签
    tagValue = ''; // 正在输入的标签
    isCancelAddTag = false; // 防止回车和blur同时触发
    focusTimer = null; // 延迟自动获取焦点

    public testData1 = [
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
    // 报警人电话
    helperNumber = {
        value: '',
        isTrue: true
    }
    constructor(){
        this.data = this.source.slice();
    }
    ngOnInit() {
    }
    getDominionUnit(name) {
        this.info.policeOfficeId = name;
      }
    handleFilter(value) {
        this.data = this.source.filter((s) => s.text.toLowerCase().indexOf(value.toLowerCase()) !== -1);
    }
    // 所属分局
    onChangeSuosufenju(value) {
        console.log('所属分局==', value);
        this.suosufenjuValue = value;
        if (value === undefined) {
            this.guanxiadanweiData = [];
            this.guanxiadanweiValue = this.guanxiadanweiData[0];
        } else {
            this.guanxiadanweiData = value.child;
            this.guanxiadanweiValue = this.guanxiadanweiData[0];
        }
    }
    // 所属分局 过滤
    filterSuosufenju(value) {
        const k = this.suosufenjuData.filter((s) => s.text.toLowerCase().indexOf(value.toLowerCase()) !== -1);
    }
    // 案由
    onChangeAnyou(value) {
        this.anyouFirValue = value;
        if (value === undefined) {
            this.anyouSec = [];
            this.anyouSecValue = this.anyouSec[0];
        } else {
            this.anyouSec = value.child;
            this.anyouSecValue = this.anyouSec[0];
        }
    }
    switchSelect(index) {
        this.selectIndex = index;
    }
    // 切换警情等级
    switchPoliceLevel(index) {
        this.policeLevel = index;
    }
    // 切换底部的tab
    switchBottomTab(index) {
        this.bottomBtnIndex = index;
    }
    // 是否显示标志物
    showBiaoZhiWuHandle() {
        this.showBiaoZhiWu = !this.showBiaoZhiWu;
    }
    /**
     * 新增标签
     * @param flag 是否要新增
     * @param eventType 新增方式 0回车事件 1失去焦点事件
     */
    addTag(flag, eventType) {
        this.isAddTag = flag;
        if (!flag && !this.isCancelAddTag) {
            this.isCancelAddTag = eventType === 0 ? true : false; // 回车事件时，阻止blur事件的再次执行
            this.tagValue !== '' && this.tagsArr.push(this.tagValue); // 非空时添加
            this.tagValue = ''; // 置空输入值
        } else {
            this.isCancelAddTag = false;
            clearTimeout(this.focusTimer);
            this.focusTimer = setTimeout(() => {
                this.input.nativeElement.focus();
                clearTimeout(this.focusTimer);
            },0);
        }
    }
    // 删除标签
    closeTag(index) {
        this.tagsArr.splice(index, 1);
    }
    // 校验报警人电话
    testPhone() {
        this.helperNumber.isTrue = testFromFunc.testPhoneNumber(this.helperNumber.value);
    }
    ngOnDestroy() {
        clearTimeout(this.focusTimer);
    }
}