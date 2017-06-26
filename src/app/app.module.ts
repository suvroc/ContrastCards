import { IconEngineModule } from './../components/icon-engine/icon-engine.module';
import { ConfigurationPage } from './../pages/configuration/configuration';
import { BwCardsPage } from './../pages/bw-cards/bw-cards';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from "@angular/http";
import { SwipeVertical } from '../directives/swipe-vertical/swipe-vertical';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BwCardsPage,
    SwipeVertical,
    ConfigurationPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IconEngineModule
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
