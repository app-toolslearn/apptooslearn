import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TestService } from "../../service/testService";
import { TestChoicePage } from "../test-choice/test-choice";
import { ExercisePage } from "../exercise/exercise";



@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {

  tests: any
  number1: any
  number2: any
  number3: any

  constructor(public navCtrl: NavController, public navParams: NavParams, private testService: TestService) {
    this.testService.getAllTest().subscribe(data => {
      this.tests = data

      console.log(this.tests)

      this.tests.forEach(element => {
        if (element.test_type == 'e') {
          this.number1 = 1
        }
        if (element.test_type == 'm') {
          if (this.number1 > 0) {
            this.number2 = this.number1 + 1
          } else {
            this.number2 = 1
          }
        } else if (element.test_type == 'h') {
          if (this.number2 > 0) {
            this.number3 = this.number2 + 1
          } else if (this.number1 > 0 && this.number2 == null) {
            this.number3 = this.number1 + 1
          } else {
            this.number3 = 1
          }

        }
      });


    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
  }

  onClickTest(testId, index){
    this.navCtrl.push(ExercisePage,{
      testId: testId,
      exerciseName : 'ชุดข้อสอบที่ ' + index,
    });
  }

}
