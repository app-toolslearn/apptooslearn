import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Component } from '@angular/core';
import { LoginPage } from '../login/login';

import { TabsPage } from '../tabs/tabs';

import { Storage } from "@ionic/storage";


import { FormBuilder, Validators, FormGroup } from "@angular/forms";

import { MsgService } from "../../service/messageService";



@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {

  public MsgForm;
  userData: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController,
    private storage: Storage,
    myform: FormBuilder,
    private msgService: MsgService) {

    this.MsgForm = FormGroup;
    this.MsgForm = myform.group({
      desc: [
        null,
        Validators.compose([
          Validators.required
        ])
      ]
    });


    this.storage.get("user").then(data => {
      if (data != null) {
        this.userData = data;
      }
      //this.userData = storage.get("user");

      //console.log(this.userData[0].user_email)
    }
    )
  };

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagePage');
  }
  ClosemessagePage() {
    this.navCtrl.push(TabsPage);
  }
  CloseeditPage() {
    this.navCtrl.push(TabsPage);
  }

  onClickSendMessage() {
    //console.log(this.MsgForm.desc)

    this.msgService
      .sendMsg(this.userData[0].user_id, this.MsgForm.desc)
      .subscribe(data => {
        console.log(data);
        if (data.length != 0) {
          let alert = this.alertCtrl.create({
            title: "ส่งข้อความสำเร็จ",
            subTitle: "รอการตอบกลับจาก Admin",
            buttons: ["ตกลง"]
          });
          alert.present();
        } else {
          let alert = this.alertCtrl.create({
            title: "ไม่สำเร็จ",
            subTitle: "เกิดข้อผิดพลาด",
            buttons: ["ตกลง"]
          });
          alert.present();
        }
      });

      this.navCtrl.push(TabsPage);
  }
}

