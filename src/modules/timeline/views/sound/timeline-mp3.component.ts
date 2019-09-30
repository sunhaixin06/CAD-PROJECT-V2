import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
    selector: 'timeline-mp3',
    templateUrl: './timeline-mp3.component.html',
    styleUrls: ['./timeline-mp3.component.css']
})
export class TimelineMp3Component implements OnInit {

    // urlList;

    constructor() {}

    ngOnInit() {
        // $('#yinpin1')[0].play();
    }

    /**
     *  音频切换
     */
    YinPinTab(index) {
        // alert(index);
    	const audioList = $('kendo-tabstrip audio');
    	for (let i = 1; i <= audioList.length; i++) {
    		$('#yinpin' + i)[0].pause();
    	}
    	$('#yinpin' + index)[0].play();
    }

}