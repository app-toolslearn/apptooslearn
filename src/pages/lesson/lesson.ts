import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import 'rxjs/add/operator/map'
import { LessonService } from "../../service/lessonService";
import { ExercisePage } from "../exercise/exercise";
import { LessonContentPage } from "../lesson-content/lesson-content";



import { Storage } from "@ionic/storage";

@Component({
  selector: 'page-lesson',
  templateUrl: 'lesson.html',
})
export class LessonPage {

  lessons: any;
  userData: any;

  constructor(private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams,
    private lessonData: LessonService, private storage: Storage) {

      this.storage.get("user").then(data => {
        if (data != null) {
          this.userData = data;
          var userId = data[0].user_id;
          this.lessonData.lessonService(1, userId).subscribe(data => {
            this.lessons = data;
            console.log(data);
  
          });
        }
        //this.userData = storage.get("user");
  
        //console.log(this.userData[0].user_email)
      });

  }

  test(lessonID) {
    this.navCtrl.push(ExercisePage, {
      dataID: lessonID.les_id
    });

  }

  goToLearn(lessonID) {
    this.navCtrl.push(ExercisePage, {
      dataID: lessonID.les_id
    });

  }

  onClickContent(lessonId) {
    this.navCtrl.push(LessonContentPage, {
      lessonId: lessonId
    });
  }


}
