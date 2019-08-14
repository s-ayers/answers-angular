import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
  Drupal7ServicesModule,
  DrupalConstants,
  Settings
} from 'ngx-drupal7-services';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    const drupalSettings: Settings = {
      apiEndPoint: 'api',
      apiHost: 'localhost',
      apiProtocol: 'http',
      language: 'und',
      requestTimeout: 5000,
      allowOffline: true // optional
    };
    DrupalConstants.Settings = drupalSettings;
  }
}
