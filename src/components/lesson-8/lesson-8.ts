import { Component } from '@angular/core';

/**
 * Generated class for the Lesson_8Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'lesson-8',
  templateUrl: 'lesson-8.html'
})
export class Lesson_8Component {

  text: string;

  constructor() {
    console.log('Hello Lesson_8Component Component');
    this.text = 'Hello World';
  }

}
