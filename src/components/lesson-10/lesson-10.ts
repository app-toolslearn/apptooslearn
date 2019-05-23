import { Component } from '@angular/core';

/**
 * Generated class for the Lesson_10Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'lesson-10',
  templateUrl: 'lesson-10.html'
})
export class Lesson_10Component {

  text: string;

  constructor() {
    console.log('Hello Lesson_10Component Component');
    this.text = 'Hello World';
  }

}
