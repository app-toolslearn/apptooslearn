import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from "@ionic/storage";

import { MyApp } from './app.component';
import { FirstPage } from '../pages/first/first';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from "../pages/login/login";
import { TabsPage } from "../pages/tabs/tabs";
import { MorePage } from "../pages/more/more";
import { TestPage } from "../pages/test/test";
import { ReportPage } from "../pages/report/report";
import { LessonPage } from "../pages/lesson/lesson";
import { ForgetPasswordPage } from "../pages/forget-password/forget-password";
import { EditProfilePage } from "../pages/edit-profile/edit-profile";
import { MessagePage } from "../pages/message/message";

//component
import { ProgressBarComponent} from "../components/progress-bar/progress-bar"; 
import { Lesson_1Component } from "../components/lesson-1/lesson-1";
import { Lesson_2Component } from "../components/lesson-2/lesson-2";
import { Lesson_3Component } from "../components/lesson-3/lesson-3";
import { Lesson_4Component } from "../components/lesson-4/lesson-4";
import { Lesson_5Component } from "../components/lesson-5/lesson-5";
import { Lesson_6Component } from "../components/lesson-6/lesson-6";
import { Lesson_7Component } from "../components/lesson-7/lesson-7";
import { Lesson_8Component } from "../components/lesson-8/lesson-8";
import { Lesson_9Component } from "../components/lesson-9/lesson-9";
import { Lesson_10Component } from "../components/lesson-10/lesson-10";
import { TestEasyComponent } from "../components/test-easy/test-easy";
import { TestModerateComponent } from "../components/test-moderate/test-moderate";
import { TestHardComponent } from "../components/test-hard/test-hard";



@NgModule({
  declarations: [
    //page
    MyApp,
    FirstPage,
    HomePage,
    RegisterPage,
    LoginPage,
    TabsPage,
    MorePage,
    TestPage,
    ReportPage,
    LessonPage,
    ForgetPasswordPage,
    EditProfilePage,
    MessagePage,



    //Component
    ProgressBarComponent,
    Lesson_1Component,
    Lesson_2Component,
    Lesson_3Component,
    Lesson_4Component,
    Lesson_5Component,
    Lesson_6Component,
    Lesson_7Component,
    Lesson_8Component,
    Lesson_9Component,
    Lesson_10Component,
    TestEasyComponent,
    TestModerateComponent,
    TestHardComponent,


  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      // tabsPlacement: 'top',
    }),
    IonicStorageModule.forRoot()

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FirstPage,
    HomePage,
    RegisterPage,
    LoginPage,
    TabsPage,
    MorePage,
    TestPage,
    ReportPage,
    LessonPage,
    ForgetPasswordPage,
    EditProfilePage,
    MessagePage,

  ],
  providers: [
    StatusBar,
    SplashScreen,

    { provide: ErrorHandler, useClass: IonicErrorHandler, },

  ]
})
export class AppModule { }
