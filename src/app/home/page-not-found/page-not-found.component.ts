import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
})
export class PageNotFoundComponent implements OnInit {
  @ViewChild('hflex', { read: ElementRef, static: false })
  heightFlex: ElementRef = {} as ElementRef;
  @ViewChild('footerEl', { read: ElementRef, static: false })
  footerView: ElementRef = {} as ElementRef;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.renderer.setStyle(
      this.heightFlex.nativeElement,
      'height',
      window.outerHeight -
        30 -
        this.footerView.nativeElement.offsetHeight +
        'px'
    );
  }
}
