import {Component, OnInit, OnDestroy, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'chat-list',
  templateUrl: './chatList.component.html',
  styleUrls: ['./chatList.component.scss']
})
export class ChatListComponent implements OnInit, OnDestroy {
    @Output() chatListEvent = new EventEmitter<any>();
    constructor(){}
    ngOnInit() {

    }
    handleClick(val) {
        this.chatListEvent.emit(1);
    }
    ngOnDestroy() {

    }
}
