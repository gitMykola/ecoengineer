import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslatorService } from './services/translator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  public user: any;
  constructor(
    private route: Router,
    public ts: TranslatorService
  ) { }
  public ngOnInit() {
    this.ts.set('EN');
    this.user = {
      name: 'Nick Borodyn',
      email: 'mykola_borodyn@ecoengineer.in.ua',
      token: 'sdfls-lfj/flvnsdfjvn'
    };
  }
}
