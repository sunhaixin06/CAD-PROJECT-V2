import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'ds-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownCommonComponent implements OnInit {
  @Input() childData;
  @Input() inputData;
  @Output() private parentData = new EventEmitter<string>();

  newChildData = [];
  data = [];   //按列存放数据
  showData = [];  //html展示数据
  colRow = [];  //存放那些状态是active的item
  // open = false;
  time = Math.floor(Math.random() * Math.floor(10000000000000000));
  dropdownTime = 'dropdown_'+this.time;
  dropdownMenu = 'dropdownMenu_'+this.time;
  constructor() { }

  ngOnInit() {
    for (let index = 0; index < this.childData.length; index++) {
      this.childData[index].isHasChild = this.isHasChild(this.childData[index].code);
      this.newChildData.push(this.childData[index]);
    }
    this.getTreeData([], this.childData);
    this.showData.push(this.data[0]);

    //console.log(this.dropdownMenu);
  }

  //取消bootstrap dropdown的点击冒泡
  // stopProp(event) {
  //   event.stopPropagation();
  // }

  //item  hover事件
  hoverFuc(code, col, isHasChild) {
    console.log('code', code, 'col', col, 'isHasChild', isHasChild);
    
    let flag = 0;
    for (let index = 0; index < this.colRow.length; index++) {
      if (index == col) {
        this.colRow[index] = code;
        flag++;
      }
    }
    //一列只有一个active状态
    if (flag == 0) {
      this.colRow.push(code);
    }

    //存放下一列列表
    let childArray = [];
    if (isHasChild) {
      for (let index = 0; index < this.newChildData.length; index++) {
        if (code == this.newChildData[index].parentCode) {
          childArray.push(this.newChildData[index]);
        }
      }
    }
    if (this.showData.length - 1 > col) {
      let flagArray = [];
      for (let i = 0; i <= col; i++) {
        flagArray.push(this.showData[i]);
      }
      this.showData = flagArray;
    }
    if (this.colRow.length - 1 > col) {
      let flagArray = [];
      for (let i = 0; i <= col; i++) {
        flagArray.push(this.colRow[i]);
      }
      this.colRow = flagArray;
    }
    if (childArray.length > 0) {
      this.showData.push(childArray);
    }

    this.showData.forEach(item => {
      item["isShow"] = false;
    });
    this.showData[col]["isShow"] = true;
    if (isHasChild) {
      this.showData[col + 1]["isShow"] = true;
    } else if (!isHasChild && col - 2 >= 0) {
      this.showData[col - 2]["isShow"] = true;
    }
    if (col > 0) {
      this.showData[col - 1]["isShow"] = true;
    }

    console.log('this.showData', this.showData);

  }

  //获取所有的数据并按列存放在  this.data  中
  getTreeData(leftArray, rightArray) {
    if (rightArray.length == 0) {
      return;
    }
    let itemArray = [];
    if (leftArray.length == 0) {
      rightArray.forEach(element => {
        if (element.parentCode == '') {
          itemArray.push(element);
        }
      });
    } else {
      leftArray.forEach(leftEl => {
        rightArray.forEach(rightEl => {
          if (leftEl.code == rightEl.parentCode) {
            itemArray.push(rightEl);
          }
        });
      });

    }
    this.data.push(itemArray);
    for (let i = 0; i < itemArray.length; i++) {
      for (let j = rightArray.length - 1; j >= 0; j--) {
        if (itemArray[i].code == rightArray[j].code) {
          rightArray.splice(j, 1);
        }
      }
    }
    return this.getTreeData(itemArray, rightArray)
  }

  //判断item是否有子集
  isHasChild(code): boolean {
    let hasChild = false;
    this.childData.forEach(element => {
      if (element.parentCode == code) {
        hasChild = true;
      }
    });
    return hasChild;
  }

  //选择返回数据
  getItem(item) {
    this.parentData.emit(item.name);
  }

  //初始化list
  initializeList() {
    // this.open = true;
    this.colRow = [];
    this.showData = []
    this.showData.push(this.data[0]);
    this.data[0]["isShow"] = true;
    console.log('this.data[0]', this.data, this.showData);
  }

  //筛选list
  ngOnChanges(val) {
    let dropdown1 = '#'+this.dropdownMenu;
    let dropdown2 = '#'+this.dropdownTime;
    let dropdownDom = document.querySelector(dropdown1);
    let dropdown = document.querySelector(dropdown2);
    if (!val.childData) { //剔除从未保存进入
      if (this.inputData == '') {
        // this.open = false;
        dropdown.setAttribute('class','dropdown');
        dropdownDom.setAttribute('aria-expanded', 'false')
        
      } else {
        
        dropdownDom.setAttribute('aria-expanded', 'true')
        // this.open = true;
        dropdown.setAttribute('class','dropdown open');
        this.colRow = [];
        this.showData = [];
        let flag = [];
        this.newChildData.forEach(el => {
          if (el.name.indexOf(this.inputData) > -1) {
            flag.push(el);
          }
        });
        this.showData.push(flag);
      }


    }


  }



}
