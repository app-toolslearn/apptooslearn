import { Component } from '@angular/core';

/**
 * Generated class for the Lesson_4Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'lesson-4',
  templateUrl: 'lesson-4.html'
})
export class Lesson_4Component {

  text: string;

  constructor() {
    console.log('Hello Lesson_4Component Component');
    this.text = 'Hello World';
  }

}
