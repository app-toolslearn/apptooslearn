import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-lesson',
  templateUrl: 'lesson.html',
})
export class LessonPage {

  lessons : Array <any> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.lessons = [ 
      {
        "les" : "บทที่ 1 การพัฒนาโปรแกรม",
        "exercise" : "test1" ,
        "score" : "10"
      },
      {
        "les" : "บทที่ 2 Basic C Programming",
        "exercise" : "test2" ,
        "score" : "10"
      },
      {
        "les" : "บทที่ 3 Operator & Expression",
        "exercise" : "test3" ,
        "score" : "10"
      }
  ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LessonPage');
  }

}
