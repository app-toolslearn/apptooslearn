import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import 'rxjs/add/operator/map'
import { LessonService } from "../../service/lessonService";
import { TestPage } from "../test/test";



@Component({
  selector: 'page-lesson',
  templateUrl: 'lesson.html',
})
export class LessonPage {

  lessons : any;

  constructor(private alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams,private lessonData:LessonService) {
    this.lessonData.lessonService(1).subscribe(data =>{
      this.lessons = data;
      console.log(data);
      
    })
  }

  test(lessonID){    
    this.navCtrl.push(TestPage,{
      dataID: lessonID.les_id
    });

  }
  reset(lessonID){    
    let alert = this.alertCtrl.create({
      title: 'บทนำ ',
      subTitle: 'ยินดีตอนรับเข้าสู่ Application Toolslearning เป็นแอปพลิเคชันสำหรับการเรียนรู้เหมาะสำหรับนักศึกษาตั่งแต่ชั้นปีที่ 1 หรือสำหรับคนทั่วไปที่สนใจในการเขียนโปรแกรมเพื่อแก้โจทย์ปัญหาต่างๆและเป็นหลักสูตรที่ทำให้ผู้ใช้เขียนโปรแกรมภาษา C เบื้องต้นได้อย่างรวดเร็ว',
      buttons: ['ตกลง']
    });

  }
  goToLearn(lessonID){    
    this.navCtrl.push(TestPage,{
      dataID: lessonID.les_id
    });

  }
 

}
