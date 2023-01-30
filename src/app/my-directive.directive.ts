import { Directive, Input, ElementRef, AfterViewInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective{
  @Input() slowo: string;
  @Input() color: string;
  @Input() font: string;
  oldColor = '';
  oldFont = '';

  constructor(private element: ElementRef) {

}

ngAfterViewInit(): void {

}

changeLook(old: boolean): void {
  if (!old) {
    this.oldColor = this.element.nativeElement.style.color;
    this.oldFont = this.element.nativeElement.style.fontFamily;
    this.element.nativeElement.style.color = this.color;
    this.element.nativeElement.style.fontFamily = this.font;
  } else {
    this.element.nativeElement.style.color = this.oldColor;
    this.element.nativeElement.style.fontFamily = this.oldFont;
  }
}

@HostListener('mouseenter') onMouseEnter() {
  this.changeLook(false);
}

@HostListener('mouseleave') onMouseleave() {
  this.changeLook(true);
}


}
