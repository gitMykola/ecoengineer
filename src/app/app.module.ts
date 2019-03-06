import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import {
  HomeComponent,
  HeaderComponent,
  FooterComponent,
  DesignComponent,
  DomesticComponent,
  BusinessComponent
} from './components';
import { TranslatorService } from './services/translator.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DomesticComponent,
    BusinessComponent,
    HeaderComponent,
    DesignComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    RouterModule
  ],
  providers: [
    TranslatorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
