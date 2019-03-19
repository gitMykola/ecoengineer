import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  HostListener,
} from '@angular/core';
import { TranslatorService } from '../../services/translator.service';
import {
  useAnimation,
  trigger,
  transition,
  group,
  query,
  style,
  animate,
  state
} from '@angular/animations';
import { anim } from '../../animations/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['home.component.less'],
  animations: [
    trigger('title_2', [
      state('false', style({ opacity: 0 })),
      state('true', style({ opacity: 1 })),
      transition('* => true', [
        useAnimation(anim.moveFromRight)
      ]),
      transition('* => false', [
        style({ opacity: 0, transform: 'translateX(200px)'})
      ])
    ]),
    trigger('title_3', [
      state('false', style({ opacity: 0 })),
      state('true', style({ opacity: 1 })),
      transition('* => true', [
        useAnimation(anim.blurFilter, { params: { time: 2000 } })
      ]),
      transition('* => false', [
        style({ opacity: 0, filter: 'blur(400px)' })
      ])
    ])
  ]
})
export class HomeComponent implements OnInit, AfterViewInit {  
  @ViewChild('slide') private slide: ElementRef<HTMLElement>;
  element: ElementRef;
  animate: boolean;

  constructor(
    public ts: TranslatorService
  ) {
    this.animate = false;
  }

  ngOnInit() {
    const self = this;
    window.onorientationchange = function () { self.setSlideHeight() };
    window.onresize = function () { self.setSlideHeight() }
    
  }
  ngAfterViewInit() {
    this.setSlideHeight();
    setTimeout(() => this.animate = true, 100);
  }
  setSlideHeight() {
    this.slide.nativeElement.style.height = this.viewportHeight() + 'px';
  }
  getPosition(el) {
    var xPos = 0;
    var yPos = 0;

    while (el) {
      if (el.tagName == "BODY") {
        // deal with browser quirks with body/window/document and page scroll
        var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
        var yScroll = el.scrollTop || document.documentElement.scrollTop;

        xPos += (el.offsetLeft - xScroll + el.clientLeft);
        yPos += (el.offsetTop - yScroll + el.clientTop);
      } else {
        // for all other non-BODY elements
        xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
        yPos += (el.offsetTop - el.scrollTop + el.clientTop);
      }

      el = el.offsetParent;
    }
    return {
      x: xPos,
      y: yPos
    };
  }
  goToAnchor(anchor) {
    document.querySelector('#' + anchor)
      .scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  viewportHeight() {
    let h = window.innerHeight || 0;
    if (document.documentElement && document.documentElement.clientHeight)
      h = document.documentElement.clientHeight;
    else if (document.body)
      h = document.body.clientHeight;
    return h;
  }
}
