import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appTimes]',
})
export class TimesDirective {
  constructor(
    private ViewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}
  @Input('appTimes') set render(times: number) {
    this.ViewContainer.clear();
    for (let i = 0; i < times; i++) {
      this.ViewContainer.createEmbeddedView(this.templateRef, {});
    }
  }
}
