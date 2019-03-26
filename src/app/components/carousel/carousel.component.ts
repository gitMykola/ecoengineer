import { AfterViewInit, Component, ContentChildren, Directive, ElementRef, Input, OnInit, QueryList, TemplateRef, ViewChild, ViewChildren } from '@angular/core';
import { CarouselItemDirective } from './carouselItem.direcrive';
import { animate, AnimationBuilder, AnimationFactory, AnimationPlayer, style } from '@angular/animations';

@Directive({
  selector: '.carousel-item'
})
export class CarouselItemElement {
}

@Component({
  selector: 'carousel',
  exportAs: 'carousel',
  template: `
    <section class="carousel-wrapper" [ngStyle]="carouselWrapperStyle">
      <ul class="carousel-inner" #carousel>
        <li *ngFor="let item of items;" class="carousel-item">
          <ng-container [ngTemplateOutlet]="item.tpl"></ng-container>
        </li>
      </ul>
    </section>
    <div *ngIf="showControls" [ngStyle]="videoControlsBlockStyle">
      <button (click)="prev()" mat-button [ngStyle]="videoButtonStyle">
        <mat-icon>keyboard_arrow_left</mat-icon>
      </button>
      <div *ngFor="let item of items; index as k"
        class="{{k == currentSlide?'active':''}}"
        [ngStyle]="videoIconStyle">
      </div>  
      <button (click)="next()" mat-button [ngStyle]="videoButtonStyle">
        <mat-icon>keyboard_arrow_right</mat-icon>
      </button>
    </div>
  `,
  styles: [`
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      width: 6000px;
    }
    .carousel-wrapper {
      overflow: hidden;
    }
    .carousel-inner {
      display: flex;
    }
    div.active {
      background: silver
    }
  `]
})
export class CarouselComponent implements AfterViewInit {
  @ContentChildren(CarouselItemDirective) items: QueryList<CarouselItemDirective>;
  @ViewChildren(CarouselItemElement, { read: ElementRef }) private itemsElements: QueryList<ElementRef>;
  @ViewChild('carousel') private carousel: ElementRef;
  @Input() timing = '2000ms cubic-bezier(0.2, 1, 0.2, 1)';
  @Input() showControls = true;
  @Input() slide = false;
  @Input() slideTime = 2;
  @Input() controlsColor = 'silver';
  private player: AnimationPlayer;
  private itemWidth: number;
  public currentSlide = 0;
  carouselWrapperStyle = {};
  videoIconStyle = {};
  videoControlsBlockStyle = {};
  videoButtonStyle = {};

  next() {
    if (this.currentSlide + 1 === this.items.length) {
      return;
    }
    this.currentSlide = (this.currentSlide + 1) % this.items.length;
    const offset = this.currentSlide * this.itemWidth;
    const myAnimation: AnimationFactory = this.buildAnimation(offset);
    this.player = myAnimation.create(this.carousel.nativeElement);
    this.player.play();
  }

  private buildAnimation(offset) {
    return this.builder.build([
      animate(this.timing, style({ transform: `translateX(-${offset}px)` }))
    ]);
  }

  prev() {
    if (this.currentSlide === 0) {
      return;
    }

    this.currentSlide = ((this.currentSlide - 1) + this.items.length) % this.items.length;
    const offset = this.currentSlide * this.itemWidth;

    const myAnimation: AnimationFactory = this.buildAnimation(offset);
    this.player = myAnimation.create(this.carousel.nativeElement);
    this.player.play();
  }

  constructor(private builder: AnimationBuilder) {
  }

  ngAfterViewInit() {
    // For some reason only here I need to add setTimeout, in my local env it's working without this.
    setTimeout(() => {
      this.itemWidth = this.itemsElements.first.nativeElement.getBoundingClientRect().width;
      this.carouselWrapperStyle = {
        width: `${this.itemWidth}px`
      };
      this.videoIconStyle = {
        'font-size' : '10px',
        'width': '10px',
        'height': '8px',
        'padding': 0,
        'margin': '0 10px',
        'border-radius': '2px',
        'border': '1px solid ' + this.controlsColor,
        'cursor': 'pointer',
        //'background': this.controlsColor
      };
      this.videoControlsBlockStyle = {
        'display': 'flex',
        'align-items': 'center'
      };
      this.videoButtonStyle = {
        'color': this.controlsColor
      };
    });
    if (this.slide) {
      setInterval(() => {
        if (this.currentSlide + 1 === this.items.length) {
          this.currentSlide = 0;
          const offset = 0;
          const myAnimation: AnimationFactory = this.buildAnimation(offset);
          this.player = myAnimation.create(this.carousel.nativeElement);
          this.player.play();
        } else {
          this.next();
        }
      }, this.slideTime * 1000);
    }
  }

}
