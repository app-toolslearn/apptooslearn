import { Component } from '@angular/core';

/**
 * Generated class for the TestModerateComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'test-moderate',
  templateUrl: 'test-moderate.html'
})
export class TestModerateComponent {

  text: string;

  constructor() {
    console.log('Hello TestModerateComponent Component');
    this.text = 'Hello World';
  }

}
