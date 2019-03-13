import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

/*
  TODO
  done - saving animation, add moveFromTop
  done - footer bottom menu set li color to silver
  done - footer bottom menu set icons padding
  done - footer bottom menu set @media-screen responsive on/off bottom menu
  - footer add socials
  - add ankers to start slide buttons
  - make Home component objects gallery
  - make Home component contacts frame
  - add goToTop component
  - redesign Business Component background to site style
  - add AskButton Component
  - design & add Technologies Component
  - design & add Services Component
  - REST API & backend...
*/
