import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {

  tests : Array <any> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tests = [ 
      {
        "testname" : "ชุดข้อสอบชุดที่ 1",
        "exercise" : "test1" ,
        "symbol" : "correct"
      },
      {
        "testname" : "ชุดข้อสอบชุดที่ 2",
        "exercise" : "test1" ,
        "symbol" : "wrong"
      },
      {
        "testname" : "ชุดข้อสอบชุดที่ 3",
        "exercise" : "test1" ,
        "symbol" : "correct"
      }
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
  }

}
