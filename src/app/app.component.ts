import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, MenuController, Img } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { timer } from 'rxjs/observable/timer';
import { Storage } from "@ionic/storage";

import { FirstPage } from '../pages/first/first';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { ReportPage } from '../pages/report/report';
import { urlToNavGroupStrings } from 'ionic-angular/umd/navigation/url-serializer';
import { LessonPage } from '../pages/lesson/lesson';
import { TestPage } from '../pages/test/test';
import { TabsPage } from '../pages/tabs/tabs';
import { ForgetPasswordPage } from '../pages/forget-password/forget-password';
import { MessagePage } from '../pages/message/message';
import { EditProfilePage } from '../pages/edit-profile/edit-profile';
import { RegisterPage } from '../pages/register/register';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  [x: string]: any;

  rootPage: any ;
  showSplash = true; // <-- show animation

  //pageArray menu Toggle
  pages: Array<{ title: string, Component: any }>;
  activePage: any;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, 
    public menuCtrl: MenuController,private storage:Storage) {


    this.pages = [
      { title: 'Message', Component: MessagePage },
      { title: 'Edit Profile', Component: EditProfilePage },

    ];
    this.activePage = this.pages[0];



    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
       this.storage.get("user").then(data =>{
         if (data != null) {
          this.rootPage = LessonPage
         } else {
          this.rootPage = LoginPage
         }

       })
      timer(1000).subscribe(() => this.showSplash = false)
    });
  }
  openPage(page) {
    this.nav.setRoot(page.Component);
    this.activePage = page;
  }
  checkActive(page) {
    return page == this.activePage;
  }
  logoutClicked() {
    this.menuCtrl.close();
    this.nav.setRoot(LoginPage);
    this.storage.clear()


  }

}

