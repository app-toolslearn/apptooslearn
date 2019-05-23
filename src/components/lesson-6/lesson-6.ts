import { Component } from '@angular/core';

/**
 * Generated class for the Lesson_6Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'lesson-6',
  templateUrl: 'lesson-6.html'
})
export class Lesson_6Component {

  text: string;

  constructor() {
    console.log('Hello Lesson_6Component Component');
    this.text = 'Hello World';
  }

}
