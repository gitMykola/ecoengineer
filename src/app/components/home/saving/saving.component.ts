import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  HostListener,
  AfterViewChecked
} from '@angular/core';
import { TranslatorService } from '../../../services/translator.service';
import {
  trigger,
  state,
  transition,
  style,
  animate,
  useAnimation,
  group,
  query
} from '@angular/animations';
import { anim } from '../../../animations/animations';

@Component({
  selector: 'app-saving',
  templateUrl: './saving.component.html',
  styleUrls: ['./saving.component.less'],
  animations: [
    trigger('card', [
      state('0', style({ opacity: 0 })),
      state('100', style({ opacity: 1 })),
      transition('100 => 0', [
        group([
          animate('0.3s', style({ opacity: 0 })),
          query('ul li:nth-child(1)', [
            useAnimation(anim.moveToStart)
          ]),
          query('ul li:nth-child(2)', [
            useAnimation(anim.moveToStart)
          ]),
          query('ul li:nth-child(3)', [
            useAnimation(anim.moveToStart)
          ])
        ])
      ]),
      transition('0 => 100', [
        group([
          animate('0.5s', style({ opacity: 1 })),
          query('ul li:nth-child(1)', [
            useAnimation(anim.moveFromTop, { params: { time: 1000, } })
          ]),
          query('ul li:nth-child(2)', [
            useAnimation(anim.moveFromTop, { params: { time: 1300, } })
          ]),
          query('ul li:nth-child(3)', [
            useAnimation(anim.moveFromTop, { params: { time: 1600, } })
          ])
        ])
      ])
    ]
    )
  ]
})
export class SavingComponent implements OnInit, AfterViewChecked {
  private screenHeight: number;
  public moveCard: number;
  public cardTop: number;
  @ViewChild('saving') private saving: ElementRef<HTMLElement>;
  @HostListener('window:scroll', []) onWindowScroll() {
    this.setCard();
  }
  constructor(
    public ts: TranslatorService
  ) { }
  ngOnInit() {
    this.setCard();
  }
  ngAfterViewChecked() {
    this.screenHeight = window.screen.availHeight;
  }
  setCard() {
    if (this.moveCard !== 100) {
      this.cardTop = this.saving.nativeElement.querySelector('.eco-card-transparent-day')
        .getBoundingClientRect().top;
      if (this.cardTop > 0 && this.cardTop > this.screenHeight * 0.2) {
        this.moveCard = 100;
      }
      if (this.cardTop > 0 && this.cardTop > this.screenHeight * 0.5) {
        this.moveCard = 0;
      }
    }
  }
}
