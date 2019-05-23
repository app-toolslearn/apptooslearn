import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TestService } from "../../service/testService";

/**
 * Generated class for the ExercisePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exercise',
  templateUrl: 'exercise.html',
})
export class ExercisePage {

  exercises :any
  number1:any
  number2:any 
  number3:any 

  constructor(public navCtrl: NavController, public navParams: NavParams,private testService:TestService) {
    this.testService.exerciseByLessonId(this.navParams.get('dataID')).subscribe(data =>{
      this.exercises = data

      console.log("EX" + this.exercises)
      
    })      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
  }

}
