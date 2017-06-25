import { ConfigService } from './../../services/config.service';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Configuration page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
//@IonicPage()
@Component({
  selector: 'page-configuration',
  templateUrl: 'configuration.html',
})
export class ConfigurationPage {

  

  constructor(public navCtrl: NavController, public navParams: NavParams, public configService: ConfigService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Configuration');
  }

}
