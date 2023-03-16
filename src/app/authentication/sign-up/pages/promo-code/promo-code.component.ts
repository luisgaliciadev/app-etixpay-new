import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-promo-code',
  templateUrl: './promo-code.component.html',
  styleUrls: ['./promo-code.component.scss'],
})
export class PromoCodeComponent implements OnInit {
  @ViewChild('mainContainer', { read: ElementRef, static: false })
  mainContainerView: ElementRef = {} as ElementRef;
  @ViewChild('FooterEl', { read: ElementRef, static: false })
  footerView: ElementRef = {} as ElementRef;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.renderer.setStyle(
      this.mainContainerView.nativeElement,
      'height',
      window.outerHeight -
        30 -
        this.footerView.nativeElement.offsetHeight +
        'px'
    );
  }
}
