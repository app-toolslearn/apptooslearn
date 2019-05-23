import { Component } from '@angular/core';

/**
 * Generated class for the Lesson_2Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'lesson-2',
  templateUrl: 'lesson-2.html'
})
export class Lesson_2Component {

  text: string;

  constructor() {
    console.log('Hello Lesson_2Component Component');
    this.text = 'Hello World';
  }

}
