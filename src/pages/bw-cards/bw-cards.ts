import { IconEngine } from './../../components/icon-engine/icon-engine';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, Platform } from 'ionic-angular';

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
export class BwCards {

  public iconEngine: IconEngine;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private platform: Platform) {
  }

  ionViewDidLoad() {
    this.platform.ready().then(() => {
      //this.admobFree.showBanner();
    });
  }

  ionViewWillLeave() {
    //this.admobFree.hideBanner();
  }

  public next() {
    debugger;
    if (this.iconEngine) {
      this.iconEngine.nextSymbol();
    }
  }

  public previous() {
    if (this.iconEngine) {
      this.iconEngine.previousSymbol();
    }
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
