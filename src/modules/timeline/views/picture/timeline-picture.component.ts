import { Component, OnInit, DoCheck,SimpleChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
declare var $: any;

@Component({
    selector: 'timeline-picture',
    templateUrl: './timeline-picture.component.html',
    styleUrls: ['./timeline-picture.component.css'],
})
export class TimelinePictureComponent implements OnInit,DoCheck {

    // urlList;

    iflag = 0;

    flag=0;
    h=625;

    indexlog=0;

    constructor(private _sanitizer: DomSanitizer) {}

    ngOnInit() {
        this.listClick();
    }



    ngDoCheck() {
        if (this.iflag < 3) {
            this.liClick(0);
            this.iflag++;
        }
    }

	listClick() {
		if(this.flag === 0) {
			$(".list").find("span").css("background-position","3px -58px");
			$(".list").parent().animate({top:496});
			$(".bottle").animate({top:this.h - 100,height:'100px'});
			$(".base_left").css("height",this.h - 130);
			$(".base_right").css("height",this.h - 130);
			$(".base_content").animate({height:this.h - 130});
			this.flag=1;
		}else{
			$(".list").find("span").css("background-position","-16px -58px");
			$(".list").parent().animate({top:596});
			$(".bottle").animate({top:this.h,height:'0px'});
			$(".base_left").css("height",this.h-30);
			$(".base_right").css("height",this.h-30);
			$(".base_content").animate({height:this.h-30});
			this.flag = 0;
		}
	}

    suan() {
        const size = $('.bottle ul li').length;
        for(let i = 0;i < size;i++) {
            $('.bottle ul li').eq(i).css('border','1px solid #e6e6e6');
            if(i === this.indexlog) {
                $('.bottle ul li').eq(i).css('border','1px solid dodgerblue');
            }
        }
    }

	liClick(i) {
		$('.base_content').removeAllClass;
		let url = $('.bottle ul li').eq(i).find('img').attr('src');
		url = 'url(' + url + ') no-repeat';
		$('.base_content').css('background',url).css('background-position','50%').css('background-size','contain');
		this.indexlog = i;
		const size = $('.bottle ul li').length;
		if (size > 7) {
			if(this.indexlog >= 3) {
				var left = (this.indexlog - 3) * (-127);
				if((size - 7) * (-127) < left) {
					$('.bottle ul li').animate({left:left},500);
				}else {
					left = (size - 7) * (-127);
					$('.bottle ul li').animate({left:left},500);
				}
			
			}
		}
		this.suan();
	}

	bootle_l_click() {
		var size=$(".bottle ul li").length;
		if (size>7) {
			var left=$(".bottle ul li").css("left");
			left=parseInt(left);
			left=left+381;
			if(left%127==0){
				if(left<0){
					$(".bottle ul li").animate({left:left},500);
				}else{
					$(".bottle ul li").animate({left:"0px"},500);
				}
			}
		}
	}
	
	bootle_r_click(){
		var size=$(".bottle ul li").length;
		if (size>7) {
			var left=$(".bottle ul li").css("left");
			left=parseInt(left);
			left=left-381;
			if(left%127==0) {
				if((size-7)*(-127)<left) {
					left=left+"px";
					$(".bottle ul li").animate({left:left},500);
				}else {
					left=(size-7)*(-127)+"px";
					$(".bottle ul li").animate({left:left},500);
				}
			}
		}
	}
	
	base_left_click() {
		if(this.indexlog>=1) {
		var url=$(".bottle ul li").eq(this.indexlog-1).find("img").attr("src");
		url="url("+url+") no-repeat";
		$(".base_content").css("background",url).css("background-position","50%").css("background-size","contain");
		var size=$(".bottle ul li").length;
		if(this.indexlog>=4) {
			var left=(this.indexlog-4)*(-127);
			if (size>7) {
				if((size-7)*(-127)<left) {
					$(".bottle ul li").animate({left:left},500);
				}else{
					left=(size-7)*(-127);
					$(".bottle ul li").animate({left:left},500);
				}
			}
		}
		this.indexlog--;
		this.suan();
		}else {
			alert("已经是第一张啦");
		}
	}
	
	base_right_click() {
		var size=$(".bottle ul li").length;
		if(this.indexlog<size-1) {
		var url=$(".bottle ul li").eq(this.indexlog+1).find("img").attr("src");
		url="url("+url+") no-repeat";
		$(".base_content").css("background",url).css("background-position","50%").css("background-size","contain");
		if(this.indexlog>=3) {
			var left=(this.indexlog-2)*(-127);
			if (size>7) {
				if((size-7)*(-127)<left) {
					$(".bottle ul li").animate({left:left},500);
				}else {
					left=(size-7)*(-127);
					$(".bottle ul li").animate({left:left},500);
				}
			}
			
		}else {
			$(".bottle ul li").animate({left:"0px"},500);
		}
		this.indexlog++;
		this.suan();
		}else {
			alert("已经最后一张啦");
		}
	}

}
