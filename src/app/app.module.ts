import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LiveRatesComponent } from './live-rates/live-rates.component';
import { ConverterComponent } from './converter/converter.component';
import { FooterComponent } from './footer/footer.component';
import { DesktopModeComponentComponent } from './desktop-mode-component/desktop-mode-component.component';
import { LoaderComponentComponent } from './loader-component/loader-component.component';
import { CreditsComponent } from './credits/credits.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LiveRatesComponent,
    ConverterComponent,
    FooterComponent,
    DesktopModeComponentComponent,
    LoaderComponentComponent,
    CreditsComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    DatePipe,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
