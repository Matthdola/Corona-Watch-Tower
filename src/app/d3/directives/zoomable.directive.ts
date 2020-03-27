import { Directive, Input, ElementRef } from '@angular/core';
import { D3Service } from 'src/app/services/d3.service';


@Directive({
  selector: '[appZoomable]'
})
export class ZoomableDirective {
  @Input('zoomabledOf') zoomabledOf: ElementRef;

  constructor(
    private d3Service: D3Service,
    private _element: ElementRef
  ) { }

  ngOnInit() {
    this.d3Service.applyZoomableBehaviour(this.zoomabledOf, this._element.nativeElement);
  }

}
