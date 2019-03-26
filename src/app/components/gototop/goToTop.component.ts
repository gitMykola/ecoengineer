import { Component, ElementRef, HostListener } from '@angular/core';
import { TranslatorService } from '../../services/translator.service';
import { AnimationBuilder, AnimationPlayer, animate, style, AnimationFactory } from '@angular/animations';

@Component({
  selector: 'go-to-top',
  template: `
    <button mat-button id="goToTop" title="Top">
      <mat-icon>expand_less</mat-icon>
    </button>`,
  styles: [`
    #goToTop {
      display: block;
      position: fixed;
      bottom: 60px;
      right: 0px;
    }
    button {
      color: silver;
      background: rgba(0,0,0,0.7);
    }
  `]
})
export class GoToTopComponent {
  private timing = '1500ms cubic-bezier(0.2, 1, 0.2, 1)';
  private player: AnimationPlayer;
  private shift = 100;
  private on: boolean;
  @HostListener('window:scroll', []) onWindowScroll() {
    this.set();
  }
  constructor(
    private el: ElementRef,
    private builder: AnimationBuilder,
    public ts: TranslatorService
  ) { }
  ngOnInit() {
    this.el.nativeElement.style.opacity = 0;
    this.el.nativeElement.style.transform = `translateX(-${this.shift}px)`;
    this.on = false;
    const self = this;
    this.el.nativeElement.onclick = function () {
      self.top();
    }
  }

  onAfterViewInit() {
    this.set();
  }

  private buildAnimation(distance: number) {
    return this.builder.build([
      animate(this.timing, style({
        transform: `translateX(${distance}px)`,
        opacity: `${distance > 0 ? 1 : 0}`
      }))
    ]);
  }

  private set() {
    const active = Math.abs(document.body.getBoundingClientRect().top) > this.viewportHeight() * 0.7;
    if ((!this.on && active) || (this.on && !active)) {
      this.on = !this.on;
      const goAnimation: AnimationFactory = this.buildAnimation(
        active ? this.shift : - this.shift
      );
      this.player = goAnimation.create(this.el.nativeElement);
      this.player.play();
    }
  }

  private viewportHeight() {
    let h = window.innerHeight || 0;
    if (document.documentElement && document.documentElement.clientHeight)
      h = document.documentElement.clientHeight;
    else if (document.body)
      h = document.body.clientHeight;
    return h;
  }
  top() {
    document.body.scrollIntoView({ behavior: 'smooth' , block: 'start'});
  }
}
