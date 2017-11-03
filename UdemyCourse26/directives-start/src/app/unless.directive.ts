import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';
import {ViewContainerData} from "@angular/core/src/view";

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input() set appUnless (condition : boolean) {
    if (!condition){
      this.vcRef.createEmbeddedView(this.templateRef);
    }else {
     this.vcRef.clear();
    }
  }

  constructor(private templateRef : TemplateRef <any>, private vcRef : ViewContainerRef) { }

}
