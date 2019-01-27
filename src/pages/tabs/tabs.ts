import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from "../home/home";
import { Storage } from "@ionic/storage";

import { TestPage } from "../test/test";
import { ReportPage } from "../report/report";
import { LessonPage } from "../lesson/lesson";
import { MorePage } from "../more/more";
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  homeRoot = HomePage;
  lessonRoot = LessonPage;
  reportRoot = ReportPage;
  testRoot = TestPage;
  moreRoot = MorePage;


  constructor(private alertCtrl: AlertController,private storage:Storage) { }
  ionViewDidEnter() {
    console.log('alert');
    this.presentAlert();
  }
  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'บทนำ ',
      subTitle: 'ยินดีตอนรับเข้าสู่ Application Toolslearning เป็นแอพพลิเคชั่นสำหรับการเรียนรู้เหมาะสำหรับนักศึกษาตั่งแต่ชั้นปีที่ 1 หรือสำหรับคนทั่วไปที่สนใจในการเขียนโปรแกรมเพื่อแก้โจทย์ปัญหาต่างๆและเป็นหลักสูตรที่ทำให้ผู้ใช้เขียนโปรแกรมภาษา C เบื้องต้นได้อย่างรวดเร็ว',
      buttons: ['OK']
    });
  this.storage.get('user').then(data =>{    
    if (data[2].status == 0) {
      this.storage.get('status').then(data =>{
        if (data == 0) {
          alert.present();
          this.storage.set('status',1)
        }
      })
     
    } else {
      
    }

  })
    
   
    
  }
}
