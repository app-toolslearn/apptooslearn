import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { LoginPage } from '../login/login';


import { MsgService } from "../../service/messageService";


@Component({
  selector: 'page-forget-password',
  templateUrl: 'forget-password.html',
})
export class ForgetPasswordPage {
  [x: string]: any;

  public ForgetForm;
  email: any;
  useremail: any;

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(public navCtrl: NavController, myform: FormBuilder, public navParams: NavParams,
    private alertCtrl: AlertController,
    private msgService: MsgService) {

    this.ForgetForm = FormGroup
    this.ForgetForm = myform.group({
      useremail: [null, Validators.compose([Validators.required, Validators.pattern(this.emailPattern)])],

    })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgetPasswordPage');
  }

  Closeforget() {
    //alert(this.ForgetForm.useremail);
    this.msgService
      .forgetPassword(this.ForgetForm.useremail)
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

    this.navCtrl.push(LoginPage);
  }

  backtoLogin(){
    this.navCtrl.push(LoginPage);
  }
}
