import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  @ViewChild('HeaderEl', { read: ElementRef, static: false })
  headerView: ElementRef = {} as ElementRef;
  @ViewChild('mainPage', { read: ElementRef, static: false })
  mainPageView: ElementRef = {} as ElementRef;
  @ViewChild('mainContainer', { read: ElementRef, static: false })
  mainContainerView: ElementRef = {} as ElementRef;
  @ViewChild('FooterEl', { read: ElementRef, static: false })
  footerView: ElementRef = {} as ElementRef;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    var tooltiptriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltiptriggerList.map(function (e) {
      return new bootstrap.Tooltip(e);
    });
  }
  ngAfterViewInit(): void {
    this.renderer.setStyle(
      this.mainPageView.nativeElement,
      'padding-top',
      this.headerView.nativeElement.offsetHeight + 'px'
    );
    this.renderer.setStyle(
      this.mainPageView.nativeElement,
      'min-height',
      window.outerHeight + 'px'
    );
    this.renderer.setStyle(
      this.mainContainerView.nativeElement,
      'min-height',
      window.outerHeight -
        this.headerView.nativeElement.offsetHeight -
        this.footerView.nativeElement.offsetHeight +
        'px'
    );
  }

  test() {
    console.log('test');
  }
}
