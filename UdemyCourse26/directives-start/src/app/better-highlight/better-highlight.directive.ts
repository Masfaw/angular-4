import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2, Input} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective  implements OnInit{

  @Input() defaultColor : string = 'transparent';
  @Input() hightlightColor : string = 'lightgrey';


  @HostBinding('style.backgroundColor') backgroundColor : string;


  constructor(private elRef :ElementRef, private rendered : Renderer2) { }


  ngOnInit(){
    this.backgroundColor = this.defaultColor;
    // this.rendered.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }


  @HostListener('mouseenter') mouseOver(eventData : Event) {

    // this.rendered.setStyle(this.elRef.nativeElement, 'background-color', 'blue');

    this.backgroundColor = this.hightlightColor;
  }

  @HostListener('mouseleave') mouseLeave(eventData : Event){

    // this.rendered.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
      this.backgroundColor =  this.defaultColor;
  }


}
