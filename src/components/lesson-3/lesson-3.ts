import { Component } from '@angular/core';

/**
 * Generated class for the Lesson_3Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'lesson-3',
  templateUrl: 'lesson-3.html'
})
export class Lesson_3Component {

  text: string;

  constructor() {
    console.log('Hello Lesson_3Component Component');
    this.text = 'Hello World';
  }

}
