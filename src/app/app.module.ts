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
  FbLikeComponent
} from './components/index';
import { HttpClientModule } from '@angular/common/http';

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
    FbLikeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [
    TranslatorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
