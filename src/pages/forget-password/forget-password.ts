import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { LoginPage } from '../login/login';


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

  constructor(public navCtrl: NavController, myform: FormBuilder, public navParams: NavParams, private alertCtrl: AlertController) {
    this.ForgetForm = FormGroup
    this.ForgetForm = myform.group({
      'useremail': [null, Validators.compose([Validators.required, Validators.pattern(this.emailPattern)])],

    })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgetPasswordPage');
  }
  Closeforget() {
    this.navCtrl.push(LoginPage);
  }
}
