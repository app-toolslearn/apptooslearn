import { Component } from "@angular/core";
import { NavController, NavParams, AlertController } from "ionic-angular";
import { LoginPage } from "../login/login";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";

@Component({
  selector: "page-register",
  templateUrl: "register.html"
})
export class RegisterPage {
  public registerForm;

  firstname: any;

  email: any;
  password: any;
  repassword: any;
  passwordshow: boolean = false;

  firstPattern = "[a-zA-Z ]*";
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$";
  passwordPattern = "^[a-zA-Z0-9_-]{8,15}$";
  repasswordPattern = "^[a-zA-Z0-9_-]{8,15}$";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    myform: FormBuilder,
    private alertCtrl: AlertController
  ) {
    this.registerForm = FormGroup;
    this.registerForm = myform.group({
      firstname: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern(this.firstPattern),
          Validators.minLength(4),
          Validators.maxLength(15)
        ])
      ],
      email: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern(this.emailPattern)
        ])
      ],
      password: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern(this.passwordPattern),
          Validators.minLength(8),
          Validators.maxLength(15)
        ])
      ],
      repassword: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern(this.repasswordPattern),
          Validators.minLength(8),
          Validators.maxLength(15)
        ])
      ]
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad RegisterPage");
  }

  ongotoregister() {
    if (this.registerForm.password == this.registerForm.repassword) {
      console.log(this.registerForm.firstname);
      console.log(this.registerForm.email);
      console.log(this.registerForm.password);
      console.log(this.registerForm.repassword);
      let alert = this.alertCtrl.create({
        title: "สำเร็จ",
        subTitle: "",
        buttons: [
          {
            text: "Cancel",
            handler: data => {
              console.log("Cancel clicked");
            }
          },
          {
            text: "OK",
            handler: data => {
              console.log("Saved clicked");
              this.navCtrl.push(LoginPage);
            }
          }
        ]
      });
      alert.present();
    } else {
      let alert = this.alertCtrl.create({
        title: " รหัสผ่าน ไม่ตรงกัน",
        subTitle: "โปรดกรอกให้ถูกต้อง",
        buttons: ["OK"]
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
  Closeregister() {
    this.navCtrl.push(LoginPage);
  }
}
