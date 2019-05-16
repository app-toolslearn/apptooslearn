import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TestService } from "../../service/testService";


@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {

  tests :any
  number1:any
  number2:any 
  number3:any 

  constructor(public navCtrl: NavController, public navParams: NavParams,private testService:TestService) {


  
      
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
  }

}
