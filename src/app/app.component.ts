import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslatorService } from './services/translator.service';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  public user: any;
  constructor(
    private route: Router,
    public ts: TranslatorService,
    private domSanitizer: DomSanitizer,
    private matIconRegistry: MatIconRegistry
  ) {
    this.registrySVGIcons();
  }
  public ngOnInit() {
    this.ts.set('EN');
    this.user = null;/*{
      name: 'Nick Borodyn',
      email: 'mykola_borodyn@ecoengineer.in.ua',
      token: 'sdfls-lfj/flvnsdfjvn'
    };*/
  }
  registrySVGIcons() {
    [
      'facebook',
      'linkedin',
      'youtube'
    ].forEach(
      icon => this.matIconRegistry.addSvgIcon(icon,
        this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/images/icons/${icon}.svg`)
      )
    )
  }
}
