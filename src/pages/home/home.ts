import { ConfigurationPage } from './../configuration/configuration';
import { BwCardsPage } from './../bw-cards/bw-cards';
import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {

  }

  public bwCards() {
    this.navCtrl.push(BwCardsPage, { animate: true });
  }

  public settings() {
    this.navCtrl.push(ConfigurationPage, { animate: true });
  }

  public colorCards() {
    let alert = this.alertCtrl.create({
      title: 'Color cards',
      subTitle: 'This mode will be available soon',
      buttons: ['Ok']
    });
    alert.present();
  }

  public showInfo() {
    let alert = this.alertCtrl.create({
      title: 'Baby Contrast Cards',
      subTitle: 'Application that stimulate the little baby brain\n\nResources:\nhttp://game-icons.net/ \nhttp://freepik.com/',
      buttons: ['Ok']
    });
    alert.present();
  }

}
