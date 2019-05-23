import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { TestService } from "../../service/testService";
/**
 * Generated class for the TestChoicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test-choice',
  templateUrl: 'test-choice.html',
})
export class TestChoicePage {

  testChoices :any
  number1:any
  number2:any 
  number3:any 

  constructor(public navCtrl: NavController, public navParams: NavParams,private testService:TestService) {
    this.testService.testChoiceByTestId(this.navParams.get('testId')).subscribe(data =>{
      this.testChoices = data

      console.log("test choice" + this.testChoices)
      
    })      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestChoicePage');
  }

}
