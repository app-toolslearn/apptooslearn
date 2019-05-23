import { Component } from '@angular/core';

/**
 * Generated class for the Lesson_9Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'lesson-9',
  templateUrl: 'lesson-9.html'
})
export class Lesson_9Component {

  text: string;

  constructor() {
    console.log('Hello Lesson_9Component Component');
    this.text = 'Hello World';
  }

}
