import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { CommonService } from './services/common.services';
import { ControlLoader } from './controllers/index';
import { ServiceLoader } from './services/index';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { HeaderComponent } from './components/header/header/header.component';
import { SearchBarComponent } from './components/search-bar/search-bar/search-bar.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchBarComponent,
    SearchResultsComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, CommonModule, HttpClientModule, FormsModule, AppRoutingModule],
  providers: [
    ControlLoader.GetControls(),
    ServiceLoader.GetServices(),
    CommonService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
