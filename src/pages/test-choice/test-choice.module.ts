import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestChoicePage } from './test-choice';

@NgModule({
  declarations: [
    TestChoicePage,
  ],
  imports: [
    IonicPageModule.forChild(TestChoicePage),
  ],
})
export class TestChoicePageModule {}
