import { Component } from '@angular/core';

/**
 * Generated class for the Lesson_7Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'lesson-7',
  templateUrl: 'lesson-7.html'
})
export class Lesson_7Component {

  text: string;

  constructor() {
    console.log('Hello Lesson_7Component Component');
    this.text = 'Hello World';
  }

}
