import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IntroduceComponent } from './introduce/introduce.component';
import { ContactComponent } from './contact/contact.component';
import { MapComponent } from './map/map.component';
import { FooterComponent } from './footer/footer.component';
import { AgmCoreModule } from '@agm/core';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroduceComponent,
    ContactComponent,
    MapComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAP78tmLgf7GeuYsRNQKPm-KQfBsYUaaRU'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
