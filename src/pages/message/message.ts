import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Component } from '@angular/core';
import { LoginPage } from '../login/login';

import { TabsPage } from '../tabs/tabs';



@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagePage');
  }
  ClosemessagePage() {
    this.navCtrl.push(TabsPage);
  }
  CloseeditPage() {
    this.navCtrl.push(TabsPage);
  }
}
