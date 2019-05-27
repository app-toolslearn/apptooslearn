import { Component } from "@angular/core";
import { NavController, NavParams, AlertController, MenuController } from "ionic-angular";
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
    private loginService: Longin,
    private menu: MenuController
  ) {

    this.menu.swipeEnable(false);
    // สร้าง FromGroup สำหรับ validate ข้อมูล
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

  // กดปุ่ม ลืมรหัส
  gotoforgetpassword() {
    // ไปหน้า ForgetPasswordPage
    this.navCtrl.push(ForgetPasswordPage);
  }

  // 
  ongotoregister() {
    // ไปหน้า RegisterPage
    this.navCtrl.push(RegisterPage);
  }

  // กดปุ่ม Login
  ongotorelogin() {

    // เรียก Service loginService ส่ง parameter 2 ตัว ที่พิมมาจาก html this.LoginForm.username กับ this.LoginForm.password
    this.loginService
      .loginService(this.LoginForm.username, this.LoginForm.password)
      .subscribe(data => {

        // subscribe รับข้อมูล data หลังจาก service loginService ทำงานเสร็จแล้ว

        if (data.length != 0) {

          // บันทึกข้อมูลที่ได้ลง storage(Lib ของ Angular สำหรับบันทึกข้อมูลลงหน่วยความจำ)
          this.storage.set("user", data);

          // ไปหน้า TabsPage
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
