import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LessonContentPage } from './lesson-content';

@NgModule({
  declarations: [
    LessonContentPage,
  ],
  imports: [
    IonicPageModule.forChild(LessonContentPage),
  ],
})
export class LessonContentPageModule {}
