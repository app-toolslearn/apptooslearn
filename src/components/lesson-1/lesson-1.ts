import { Component, Input } from '@angular/core';

/**
 * Generated class for the Lesson_1Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'lesson-1',
  templateUrl: 'lesson-1.html'
})
export class Lesson_1Component {

  @Input("lessondata") dataLesson:any
  lesson :any
  constructor() {
    console.log(this.dataLesson)
    this.lesson = this.dataLesson;
  }

}
