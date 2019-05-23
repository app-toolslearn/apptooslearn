import { Component } from "@angular/core";
import { NavController, NavParams, AlertController } from "ionic-angular";
import { RegisterPage } from "../register/register";
import { TabsPage } from "../tabs/tabs";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { ForgetPasswordPage } from "../forget-password/forget-password";
import { Storage } from "@ionic/storage";
import { Longin } from "../../service/login";

@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  [x: string]: any;

  public LoginForm;
  user: any;
  pass: any;

  username: any;
  password: any;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$";
  passwordPattern = "^[a-z0-9A-Z_-]{6,15}$";
  constructor(
    public navCtrl: NavController,
    myform: FormBuilder,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private storage: Storage,
    private loginService: Longin
  ) {
    this.LoginForm = FormGroup;
    this.LoginForm = myform.group({
      username: [
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
          Validators.pattern(this.passwordPattern)
        ])
      ]
    });
  }

  gotoforgetpassword() {
    this.navCtrl.push(ForgetPasswordPage);
  }
  ongotoregister() {
    this.navCtrl.push(RegisterPage);
  }
  ongotorelogin() {
    this.loginService
      .loginService(this.LoginForm.username, this.LoginForm.password)
      .subscribe(data => {
        console.log("XX"+data);
        if (data.length != 0) {
          this.storage.set("user", data);
          this.navCtrl.push(TabsPage);
          let status = {
            status: 0
          };
        } else {
          let alert = this.alertCtrl.create({
            title: "อีเมล์ เเละ รหัสผ่าน",
            subTitle: "ไม่ถูกต้อง",
            buttons: ["ตกลง"]
          });
          alert.present();
        }
      });
  }
}
