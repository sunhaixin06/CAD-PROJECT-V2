import {Component, OnInit, OnDestroy, Output, EventEmitter, HostListener} from '@angular/core';
import { chatPageConfig } from '../../../resources/config/chatPage.config';
import { chatList } from '../../../resources/mock/chatLists';

@Component({
  selector: 'chat-page',
  templateUrl: './chatPage.component.html',
  styleUrls: ['./chatPage.component.scss']
})
export class ChatPageComponent implements OnInit, OnDestroy {
    @Output() chatPageEvent = new EventEmitter<any>();
    chatData = []; // 聊天内容
    chatConfig = chatPageConfig;
    showSearch = false; // 头部的搜索框
    constructor(){}
    ngOnInit() {
        chatList.forEach(item => {
            item.message.forEach(child => {
                child['isShowMenu'] = false; // 每一条信息都添加是否显示操作菜单的弹层
            })
        });
        this.chatData = chatList;
    }
    backList() {
        this.chatPageEvent.emit(2);
    }
    // 弹出层菜单的显示和隐藏
    showMenuHandle(flag, itemsIndex, childIndex, value?){
        if (!flag) {
            console.log('操作了菜单====',value);
        }
        this.chatData[itemsIndex].message[childIndex].isShowMenu = flag;
    }
    showSearchHandle(flag) {
        this.showSearch = flag;
    }
    @HostListener('document:click', ['$event'])
    public documentClick(event: any): void {
        console.log('document-click');
    }
    ngOnDestroy() {

    }
}
