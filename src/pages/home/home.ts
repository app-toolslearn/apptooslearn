import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  // ionViewDidEnter() {
  //   console.log('alert');
  //   this.presentAlert();
  // }
  // presentAlert() {
  //   let alert = this.alertCtrl.create({
  //     title: '',
  //     subTitle: '',
  //     buttons: ['I know']
  //   });
  //   alert.present();
  // }
}
