import { ConfigService } from './../../services/config.service';
import { SymbolService } from './../../services/symbol.service';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, Platform, Gesture } from 'ionic-angular';

/**
 * Generated class for the FreePlay page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-bw-cards',
  templateUrl: 'bw-cards.html',
})
export class BwCardsPage {

  public headerVisible: boolean = true;
  public autochange: boolean = false;
  public autochangeTimer: number;
  public inversed: boolean = true;
  public changeInterval: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private platform: Platform,
    private symbolService: SymbolService, configService: ConfigService) {
      this.changeInterval = configService.timeConfig.value;
  }

  ionViewDidLoad() {
    this.platform.ready().then(() => {
      //this.admobFree.showBanner();
    });
    this.autoHideHeader();
  }

  ionViewWillLeave() {
    //this.admobFree.hideBanner();
    this.clearAutochange();
  }

  private clearAutochange() {
    if (this.autochangeTimer) {
      clearInterval(this.autochangeTimer);
      this.autochangeTimer = null;
    }
  }

  public showHeader($event:Gesture) {
    this.headerVisible = true;
    this.autoHideHeader();
  }

  public updateAutochange() {
    if (this.autochange) {
      this.autochangeTimer = setInterval(() => {
        this.next();
      }, this.changeInterval*1000)
    } else {
      this.clearAutochange();
    }
  }

  private autoHideHeader() {
    let timer = setTimeout(() => {
      clearTimeout(timer);
      this.headerVisible = false;
    }, 3000);
  }

  public next() {
    this.shuffleColors();
    this.symbolService.next();
  }

  public previous() {
    this.shuffleColors();
    this.symbolService.prev();
  }

  private shuffleColors() {
    this.inversed = Math.round(Math.random()) == 0;
  }

  public showHelp() {
    let alert = this.alertCtrl.create({
      title: 'Help',
      subTitle: 'In this mode you can tell a story and <b>change the sybmol manually</b>, tapping left or right part of screen',
      buttons: ['Ok']
    });
    alert.present();
  }

}
