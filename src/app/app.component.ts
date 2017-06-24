import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from "../pages/home/home";
import { SymbolService } from "../services/symbol.service";
import { StorageService } from "../services/storage.service";
import { ConfigService } from "../services/config.service";

@Component({
  templateUrl: 'app.html',
  providers: [SymbolService, StorageService, ConfigService]
})
export class MyApp {
  rootPage:any = HomePage;
  
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
