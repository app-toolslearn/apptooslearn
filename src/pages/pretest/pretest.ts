import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';




@Component({
  selector: 'page-pretest',
  templateUrl: 'pretest.html',
})
export class PretestPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PretestPage');
  }

}
