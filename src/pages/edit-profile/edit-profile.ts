
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Component } from '@angular/core';
import { LoginPage } from '../login/login';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { TabsPage } from '../tabs/tabs';


@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {
  public editpageForm;

  firstname: any;
  email: any;
  password: any;
  repassword: any;
  passwordshow: boolean = false;


  firstPattern = "[a-zA-Z ]*";
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  passwordPattern = "^[a-zA-Z0-9_-]{8,15}$";
  repasswordPattern = "^[a-zA-Z0-9_-]{8,15}$";

  constructor(public navCtrl: NavController, public navParams: NavParams, myform: FormBuilder, private alertCtrl: AlertController) {
    this.editpageForm = FormGroup
    this.editpageForm = myform.group({
      'firstname': [null, Validators.compose([Validators.required, Validators.pattern(this.firstPattern), Validators.minLength(4), Validators.maxLength(15)])],
      // 'lastname': [null, Validators.compose([Validators.required, Validators.pattern(this.firstPattern), Validators.minLength(4), Validators.maxLength(15)])],

      'email': [null, Validators.compose([Validators.required, Validators.pattern(this.emailPattern)])],
      'password': [null, Validators.compose([Validators.required, Validators.pattern(this.passwordPattern), Validators.minLength(8), Validators.maxLength(15)])],
      'repassword': [null, Validators.compose([Validators.required, Validators.pattern(this.repasswordPattern), Validators.minLength(8), Validators.maxLength(15)])],
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  
  ongotoregister() {
    if (this.editpageForm.password == this.editpageForm.repassword) {
      console.log(this.editpageForm.firstname);
      console.log(this.editpageForm.email);

      console.log(this.editpageForm.password);
      console.log(this.editpageForm.repassword);
      let alert = this.alertCtrl.create({
        title: ' Login Success',
        subTitle: '',
        buttons: [
          {
            text: 'Cancel',
            handler: data => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'OK',
            handler: data => {
              console.log('Saved clicked');
              this.navCtrl.push(LoginPage);
            }
          }
        ]
      });
      alert.present();
    } else {
      let alert = this.alertCtrl.create({
        title: ' Password ไม่ตรงกัน',
        subTitle: 'โปรดกรอกให้ถูกต้อง',
        buttons: ['OK']

      });
      alert.present();

    }

  }
  backTologin() {
    this.navCtrl.push(LoginPage);
  }
  public showpassword() {
    console.log("ออกเเล้ว");
    // if (this.passwordshow) {
    //   this.passwordshow = false;
    //   this.password = "password";
    // } else {
    //   this.passwordshow = true;
    //   this.password = "password";
    // }

  }
  CloseeditPage() {
    this.navCtrl.push(TabsPage);
  }
}
