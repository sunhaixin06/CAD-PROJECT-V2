import { Directive, ElementRef, HostListener} from '@angular/core';
declare var $ : any;

@Directive({
    selector: '[list_mouse]'
})
export class ListMouseDirective {
    private element: HTMLElement;
    private size: string
 
    constructor(elementRef: ElementRef) {
        this.element = elementRef.nativeElement;
    }
 
	@HostListener('mouseenter')
	onMouseEnter(){
    	$(".list").css("background","#e6e6e6");
    }
	
	@HostListener('mouseleave')
    onMouseLeave(){
    	$(".list").css("background","white");
    }
 
}