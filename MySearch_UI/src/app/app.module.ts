import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonService } from './services/common.services';
import { ControlLoader } from './controllers/index';
import { ServiceLoader } from './services/index';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { HeaderComponent } from './components/header/header/header.component';
import { SearchBarComponent } from './components/search-bar/search-bar/search-bar.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchBarComponent,
  ],
  imports: [BrowserModule, CommonModule, HttpClientModule],
  providers: [
    ControlLoader.GetControls(),
    ServiceLoader.GetServices(),
    CommonService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
