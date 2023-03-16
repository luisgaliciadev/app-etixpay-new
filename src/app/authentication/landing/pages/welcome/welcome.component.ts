import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Renderer2,
} from '@angular/core';
import SwiperCore, { Autoplay, Pagination } from 'swiper/core';
SwiperCore.use([Pagination, Autoplay]);

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  @ViewChild('HeaderEl', { read: ElementRef, static: false })
  headerView: ElementRef = {} as ElementRef;
  @ViewChild('mainPage', { read: ElementRef, static: false })
  mainPageView: ElementRef = {} as ElementRef;
  @ViewChild('mainContainer', { read: ElementRef, static: false })
  mainContainerView: ElementRef = {} as ElementRef;
  @ViewChild('FooterEl', { read: ElementRef, static: false })
  footerView: ElementRef = {} as ElementRef;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.renderer.setStyle(
      this.mainPageView.nativeElement,
      'padding-top',
      this.headerView.nativeElement.offsetHeight + 15 + 'px'
    );
    this.renderer.setStyle(
      this.mainPageView.nativeElement,
      'min-height',
      window.outerHeight + 'px'
    );
    this.renderer.setStyle(
      this.mainContainerView.nativeElement,
      'height',
      window.outerHeight -
        15 -
        this.footerView.nativeElement.offsetHeight +
        'px'
    );

    var paginations = document.getElementsByClassName('swiper-pagination')[0];
    paginations.classList.add('pagination-smallline');
  }
  pagination = {
    clickable: true,
  };
}
