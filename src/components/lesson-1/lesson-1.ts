import { Component } from '@angular/core';

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

  text: string;

  constructor() {
    console.log('Hello Lesson_1Component Component');
    this.text = 'Hello World';
  }

}
