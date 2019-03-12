import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TranslatorService } from '../../services/translator.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  @Input() user: any = {};

  constructor(
    private router: Router,
    public ts: TranslatorService
  ) { }

  ngOnInit() {
  }
  logout() { }
  navigate(link): void {
    this.router.navigate([link]);
  }
}
