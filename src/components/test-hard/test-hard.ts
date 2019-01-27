import { Component } from '@angular/core';

/**
 * Generated class for the TestHardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'test-hard',
  templateUrl: 'test-hard.html'
})
export class TestHardComponent {

  text: string;

  constructor() {
    console.log('Hello TestHardComponent Component');
    this.text = 'Hello World';
  }

}
