import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { TranslatorService } from './services/translator.service';
import {
  HomeComponent,
  HeaderComponent,
  FooterComponent,
  DesignComponent,
  DomesticComponent,
  BusinessComponent,
  SavingComponent,
  FbLikeComponent,
  CarouselItemElement,
  CarouselComponent,
  CarouselItemDirective,
  GoToTopComponent,
  GalleryComponent
} from './components/index';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SafeUrlsPipe } from './shared/saveUrlsPipe';
import { PreloadImgDirective } from './directives';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    DesignComponent,
    DomesticComponent,
    BusinessComponent,
    SavingComponent,
    FbLikeComponent,
    SafeUrlsPipe,
    CarouselItemElement,
    CarouselComponent,
    CarouselItemDirective,
    PreloadImgDirective,
    GoToTopComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    RouterModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [
    TranslatorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
