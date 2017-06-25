import { ConfigurationPage } from './../pages/configuration/configuration';
import { BwCardsPage } from './../pages/bw-cards/bw-cards';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IconChooser } from '../components/icon-chooser/icon-chooser';
import { IconEngine } from '../components/icon-engine/icon-engine';
import { HttpModule } from "@angular/http";
import { SwipeVertical } from '../directives/swipe-vertical/swipe-vertical';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    IconChooser,
    IconEngine,
    BwCardsPage,
    SwipeVertical,
    ConfigurationPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BwCardsPage,
    ConfigurationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
