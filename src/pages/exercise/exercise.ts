import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { TestService } from "../../service/testService";


import { Storage } from "@ionic/storage";

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

  exercises: any
  number1: any
  number2: any
  number3: any

  ansList = new Map();
  sumCorect = 0;

  les_id: any;
  test_id: any;

  submited = false;


  userData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private testService: TestService,
    private alertCtrl: AlertController, private storage: Storage) {
    this.les_id = this.navParams.get('dataID');
    this.test_id = this.navParams.get('testId');
    this.storage.get("user").then(data => {
      if (data != null) {
        this.userData = data;
      }
      //this.userData = storage.get("user");

      //console.log(this.userData[0].user_email)
    });

    if (this.les_id) {
      this.test_id = 0;
      this.testService.exerciseByLessonId(this.les_id).subscribe(data => {
        this.exercises = data

        console.log(this.exercises)

      })
    } else if (this.test_id) {
      this.les_id = 0;
      this.testService.testChoiceByTestId(this.test_id).subscribe(data => {
        this.exercises = data

        console.log(this.exercises)

      })
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
  }

  choseAns(ans, choosed) {
    //e.target.setAttribute('color' ,'secondary');
    //e.currentTarget.setAttribute('color','secondary')
    //this.ansList = 
    this.ansList.set(choosed.test_c_id, ans);
    this.resetBtnColor(choosed.test_c_id);

    for (let exercise of this.exercises) {
      var ans = this.ansList.get(exercise.test_c_id);
      if (choosed.test_c_id == exercise.test_c_id) {
        if (ans == 1) {
          exercise.btnA_Color = "secondary";
        } else if (ans == 2) {
          exercise.btnB_Color = "secondary";
        } else if (ans == 3) {
          exercise.btnC_Color = "secondary";
        } else if (ans == 4) {
          exercise.btnD_Color = "secondary";
        }

      }

    }


  }

  resetBtnColor(id) {
    for (let exercise of this.exercises) {
      //var ans = this.ansList.get(exercise.test_c_id);
      if (id == exercise.test_c_id) {
        exercise.btnA_Color = "primary";
        exercise.btnB_Color = "primary";
        exercise.btnC_Color = "primary";
        exercise.btnD_Color = "primary";
      }



    }
  }

  onClickSubmit() {

    if (this.validate()) {
      console.log(this.ansList);
      this.sumCorect = 0;
      for (let exercise of this.exercises) {
        var ans = this.ansList.get(exercise.test_c_id);
        if (ans == exercise.test_c_ans) {
          this.sumCorect++;
        }

      }
      //console.log("Sum : " + this.sumCorect);



      this.testService.saveLog(this.userData[0].user_id, this.les_id, this.test_id, this.sumCorect).subscribe(data => {
        console.log(data);
        if (data) {
          let alert = this.alertCtrl.create({
            title: "ส่งคำตอบเรียบร้อย",
            subTitle: "สามารถเช็คคะแนนได้ที่ด้านล่าง",
            buttons: ["ตกลง"]
          });

          //alert.present();
          this.ansList = new Map();
          this.submited = true;

        } else {
          let alert = this.alertCtrl.create({
            title: "ไม่สำเร็จ",
            subTitle: "เกิดข้อผิดพลาด",
            buttons: ["ตกลง"]
          });
          alert.present();
        }
      });
    } else {
      let alert = this.alertCtrl.create({
        title: "กรุณาตอบคำถามให้ครบ",
        subTitle: "ตอบคำภามให้ครบทุกข้อ",
        buttons: ["ตกลง"]
      });
      alert.present();
    }
  }

  validate() {
    var exerciseQuestion = 0;

    for (let exercise of this.exercises) {
      if (exercise.test_type == 1) {
        exerciseQuestion++;
      }

    }
    if (exerciseQuestion == this.ansList.size) {
      return true;
    } else {
      return false;
    }
  }

}
