import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColorear]'
})
export class ColorearDirective {

  @HostListener('mouseenter') mouseEnter() {
    this.colorear('blue');
  }

  @HostListener('mouseleave') mouse() {
    this.colorear('');
  }

  colorear(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

  constructor(private el: ElementRef) {
  }

}
