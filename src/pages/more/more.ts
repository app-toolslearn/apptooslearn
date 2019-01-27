import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, Nav, Platform } from 'ionic-angular';
import { MessagePage } from '../message/message';
import { EditProfilePage } from '../edit-profile/edit-profile';
import { LoginPage } from '../login/login';
import { StatusBar } from '@ionic-native/status-bar';

@Component({

  selector: 'page-more',
  templateUrl: 'more.html',

})
export class MorePage {
  [x: string]: any;
  

  @ViewChild(Nav) nav: Nav;

  pages: Array<{ title: string, Component: any }>;
  activePage: any;
  constructor(public platform: Platform, public statusBar: StatusBar, public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {

    this.pages = [
      { title: 'Message', Component: MessagePage, },
      { title: 'Edit Profile', Component: EditProfilePage },
      { title: 'Edit Profile', Component: EditProfilePage },
      { title: 'Edit Profile', Component: EditProfilePage },

    ];

    this.activePage = this.pages[0];
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MorePage');



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
    console.log("Logout");

    // this.authService.logout();

    // var nav = this.app.getRootNav(LoginPage);


  }

}
