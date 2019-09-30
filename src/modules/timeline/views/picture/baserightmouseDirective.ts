import { Directive, ElementRef, HostListener} from '@angular/core';
declare var $ : any;

@Directive({
    selector: '[base_right_mouse]'
})
export class BaseRightMouseDirective {
    private element: HTMLElement;
    private size: string
 
    constructor(elementRef: ElementRef) {
        this.element = elementRef.nativeElement;
    }
 
	@HostListener('mouseenter')
	onMouseEnter(){
    	$(".base_right").css("background","#e6e6e6");
		$(".base_right").find("span").css("background-position","-40px 5px");
    }
	
	@HostListener('mouseleave')
    onMouseLeave(){
    	$(".base_right").css("background","white");
		$(".base_right").find("span").css("background-position","5px 5px");
    }
 
}