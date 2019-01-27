import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { TabsPage } from "../tabs/tabs";
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ForgetPasswordPage } from '../forget-password/forget-password';
import { Storage } from "@ionic/storage";


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'

})
export class LoginPage {
  [x: string]: any;

  public LoginForm;
  user: any;
  pass: any;

  username: any;
  password: any;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  passwordPattern = "^[a-z0-9A-Z_-]{8,15}$";
  constructor(public navCtrl: NavController, myform: FormBuilder, public navParams: NavParams, 
    private alertCtrl: AlertController,private storage:Storage) {
    this.LoginForm = FormGroup
    this.LoginForm = myform.group({
      'username': [null, Validators.compose([Validators.required, Validators.pattern(this.emailPattern)])],
      'password': [null, Validators.compose([Validators.required, Validators.pattern(this.passwordPattern)])],
    })



  }

  gotoforgetpassword() {
    this.navCtrl.push(ForgetPasswordPage);


  }
  ongotoregister() {
    this.navCtrl.push(RegisterPage);
  }
  ongotorelogin() {

    this.user = "admin@email.com";
    this.pass = "admin123456";


    if (this.LoginForm.username == this.user && this.LoginForm.password == this.pass) {
      let status = {
        status:0
      } 
      let data =[this.LoginForm.username,this.LoginForm.password,status]
      
    this.storage.set('user',data)
    this.storage.set('status',0)

      this.navCtrl.push(TabsPage);
    } else {
      let alert = this.alertCtrl.create({
        title: 'Username and Password',
        subTitle: 'ไม่ถูกต้อง',
        buttons: ['OK']
      });
      alert.present();
    }

  }

}
