import { Component } from '@angular/core';

/**
 * Generated class for the Lesson_5Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'lesson-5',
  templateUrl: 'lesson-5.html'
})
export class Lesson_5Component {

  text: string;

  constructor() {
    console.log('Hello Lesson_5Component Component');
    this.text = 'Hello World';
  }

}
