import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LessonService } from "../../service/lessonService";

/**
 * Generated class for the LessonContentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lesson-content',
  templateUrl: 'lesson-content.html',
})
export class LessonContentPage {

  contents :any
  lesson_name : any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private lessonService:LessonService) {
    this.lesson_name = this.navParams.get('lesson_name');
    this.lessonService.getLessonContent(this.navParams.get('lessonId')).subscribe(data =>{
      this.contents = data

      console.log("contents : " + this.contents)
      
    })      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LessonContentPage');
  }

}
