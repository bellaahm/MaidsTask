import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCustom]',
  standalone: true
})
export class CustomDirective {
  constructor(private myElement:ElementRef) {
    // console.log(myElement);
  }
  @HostListener('click') click(){
    this.myElement.nativeElement.style.color = this.myColorObj.fgColor;
    this.myElement.nativeElement.style.backgroundColor = this.myColorObj.bgColor;
  }

  @HostListener('mouseover') dbClick(){
    this.myElement.nativeElement.style.color = "#14471E";
    this.myElement.nativeElement.style.backgroundColor = "#EE9B01";
  }
  @HostListener('mouseout') dClick(){
    this.myElement.nativeElement.style.color = "";
    this.myElement.nativeElement.style.backgroundColor = "";
  }


  // @Input("appCustom") myColor = "";//black
  @Input("appCustom") myColorObj = {bgColor:"",fgColor:""};//black

}
