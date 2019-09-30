import { Directive, ElementRef, HostListener} from '@angular/core';
declare var $ : any;

@Directive({
    selector: '[base_left_mouse]'
})
export class BaseLeftMouseDirective {
    private element: HTMLElement;
    private size: string
 
    constructor(elementRef: ElementRef) {
        this.element = elementRef.nativeElement;
    }
 
	@HostListener('mouseenter')
	onMouseEnter(){
    	$(".base_left").css("background","#e6e6e6");
		$(".base_left").find("span").css("background-position","-43px -82px");
    }
	
	@HostListener('mouseleave')
    onMouseLeave(){
    	$(".base_left").css("background","white");
		$(".base_left").find("span").css("background-position","4px -82px");
    }
 
}